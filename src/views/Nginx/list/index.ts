import Vue from 'vue'
import Component from 'vue-class-component'
import editor from '@/components/Ace'

// const shell = require('electron').remote.shell
// const ipc = require('electron').ipcRenderer
// const remote = require('electron').remote

@Component({
  components: {
    editor
  }
})
export default class App extends Vue {
  content:string = ''
  handleChooseFile () {
    // shell.openItem('/Users/bolide')
    // ipc.send('open-file-dialog')
    // remote.dialog.showOpenDialog({
    //   properties: ['openDirectory', 'openFile']
    // }, function (fileNames) {
    //   console.info(fileNames)
    // })
  }
  editorInit (editor: any) {
    require('brace/ext/language_tools')
    require('brace/mode/sh')
    require('brace/theme/chrome')
  }
}
