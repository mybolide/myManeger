import fs from 'fs'
import { exec } from 'child_process'
import Vue from 'vue'
import Component from 'vue-class-component'
import editor from '@/components/Ace'
import consts from '@/utils/const'
import { Loading } from 'element-ui'

const ipc = require('electron').ipcRenderer
const remote = require('electron').remote

@Component({
  components: {
    editor
  }
})
export default class App extends Vue {
  content:string = ''
  nginxFile:string = ''
  nginxConfFile:string = ''
  nginxStatus:boolean = false
  mainHeight:string = ''
  fileLoadding:boolean = false
  GLOBAL: any
  loaclStore: any = this.GLOBAL.loaclStore
  rootPass:string = this.loaclStore.get(consts.rootPass)

  mounted () {
    this.nginxFile = this.loaclStore.get(consts.nginxRootPath)
    if (this.nginxFile) {
      this.readNginxConfigFile()
    }
    let elMain = this.$refs.elMain as any
    elMain = elMain.$el
    this.mainHeight = elMain.clientHeight
    this.execNginxStatus()
  }
  // 保存文件
  handleSaveFIle () {
    this.fileLoadding = true
    fs.writeFileSync(this.nginxConfFile, this.content)
    if (!this.rootPass) {
      this.getRootPass(() => {
        this.execNginxTest()
      })
    } else {
      this.execNginxTest()
    }
  }
  // 选择文件
  handleChooseFile () {
    remote.dialog.showOpenDialog({
      properties: ['openDirectory', 'openFile']
    }, (fileNames) => {
      if (fileNames && fileNames.length > 0) {
        this.nginxFile = fileNames[0]
        this.fileLoadding = true
        this.readNginxConfigFile()
        this.GLOBAL.loaclStore.set(consts.nginxRootPath, this.nginxFile)
      }
    })
  }
  handleNg (type: number) {
    if (!this.rootPass) {
      this.getRootPass(() => {
        this.execNginxStart(type)
      })
    } else {
      this.execNginxStart(type)
    }
  }
  execNginxStatus () {
    exec(`ps axu |grep 'nginx' |grep -v 'grep' |wc -l`, (err: any, stdout: any, stderr: string) => {
      if (err) {
        this.nginxStatus = false
        return
      }
      if (parseInt(stdout) > 0) {
        this.nginxStatus = true
      }
    })
  }
  execNginxStart (type: number) {
    const loadingInstance = Loading.service({ fullscreen: true })
    let typeParams = ''
    if (type === 1) {
      typeParams = ' -s reload'
    }
    if (type === 2) {
      typeParams = ' -s stop'
    }
    exec(`echo ${this.rootPass} | ${this.nginxFile}/sbin/nginx ${typeParams}`, (err: any, stdout: any, stderr: string) => {
      let infoText = ''
      if (err) {
        infoText = err.toString().replace(this.rootPass, '****')
      } else {
        if (type === 0 || type === 1) {
          this.nginxStatus = true
        }
        if (type === 2) {
          this.nginxStatus = false
        }
        infoText = stderr
      }
      loadingInstance.close()
      if (!infoText) {
        this.successInfo()
      } else {
        this.alertInfo(infoText)
      }
    })
  }
  execNginxTest () {
    exec(`echo ${this.rootPass} | ${this.nginxFile}/sbin/nginx -t`, (err: any, stdout: any, stderr: string) => {
      let infoText = ''
      if (err) {
        infoText = err.toString().replace(this.rootPass, '****')
      } else {
        infoText = stderr
      }
      this.fileLoadding = false
      this.alertInfo(infoText)
    })
  }
  alertInfo (text:string) {
    this.$alert(`<p>${text.replace('\n', '<br/>')}</p>`, '提示', {
      customClass: 'info-class',
      dangerouslyUseHTMLString: true
    })
  }
  successInfo () {
    this.$notify({
      title: '温馨提示',
      message: '操作成功',
      type: 'success'
    })
    this.fileLoadding = false
  }
  getRootPass (callback: Function) {
    this.$prompt('请输入你的密码', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }).then(res => {
      this.rootPass = res.value
      this.loaclStore.set(consts.rootPass, this.rootPass)
      callback && callback()
    })
  }
  readNginxConfigFile () {
    this.nginxConfFile = `${this.nginxFile}/conf/nginx.conf`
    const configFileContent = fs.readFileSync(this.nginxConfFile, 'utf-8')
    this.content = configFileContent
    this.fileLoadding = false
  }
  editorInit (editor: any) {
    require('brace/ext/language_tools')
    require('brace/mode/sh')
    require('brace/theme/chrome')
  }
}
