var ace = require('brace')

// module.exports = {
//   render: function (h: any) {
//     var height = this.height ? this.px(this.height) : '100%'
//     var width = this.width ? this.px(this.width) : '100%'
//     return h('div', {
//       attrs: {
//         style: "height: " + height + '; width: ' + width,
//       }
//     })
//   },
//   props: {
//     value: {
//       type: String,
//       required: true
//     },
//     lang: String,
//     theme: String,
//     height: true,
//     width: true,
//     options: Object
//   },
//   data: function () {
//     return {
//       editor: null,
//       contentBackup: ""
//     }
//   },
//   methods: {
//     px: function (n: string) {
//       if (/^\d*$/.test(n)) {
//         return n + "px";
//       }
//       return n;
//     }
//   },
//   watch: {
//     value: function (val: any) {
//       if (this.contentBackup !== val) {
//         this.editor.session.setValue(val, 1)
//         this.contentBackup = val;
//       }
//     },
//     theme: function (newTheme: any) {
//       this.editor.setTheme('ace/theme/' + newTheme)
//     },
//     lang: function (newLang: any) {
//       this.editor.getSession().setMode('ace/mode/' + newLang)
//     },
//     options: function (newOption: any) {
//       this.editor.setOptions(newOption)
//     },
//     height: function () {
//       this.$nextTick(function () {
//         this.editor.resize()
//       })
//     },
//     width: function () {
//       this.$nextTick(function () {
//         this.editor.resize()
//       })
//     }
//   },
//   beforeDestroy: function () {
//     this.editor.destroy();
//     this.editor.container.remove()
//   },
//   mounted: function () {
//     var _this = this;
//     var vm = this;
//     var lang = this.lang || 'text'
//     var theme = this.theme || 'chrome'

//     require('brace/ext/emmet')
//     var editor = vm.editor = ace.edit(this.$el)

//     this.$emit('init', editor)

//     editor.$blockScrolling = Infinity
//     //editor.setOption("enableEmmet", true)
//     editor.getSession().setMode('ace/mode/' + lang)
//     editor.setTheme('ace/theme/' + theme)
//     editor.setValue(this.value, 1)
//     this.contentBackup = this.value

//     if (autoComplete) {
//       var staticWordCompleter = {
//         getCompletions: function (editor, session, pos, prefix, callback) {
//           _this.$emit('setCompletions', editor, session, pos, prefix, callback)
//         }
//       }
//       editor.completers = [staticWordCompleter]

//       editor.setOptions({
//         enableBasicAutocompletion: true,
//         enableSnippets: true,
//         enableLiveAutocompletion: true,//只能补全
//       })
//     }

//     editor.on('change', function () {
//       var content = editor.getValue()
//       vm.$emit('input', content)
//       vm.contentBackup = content
//     });
//     if (vm.options)
//       editor.setOptions(vm.options)
//   }
// }
