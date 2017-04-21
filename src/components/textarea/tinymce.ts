import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'textarea-tinymce',
  templateUrl: 'tinymce.html'
})
export class TextareaTinymce {
  /** 标签组件 <Tag> EditRadio
   @params options <Array> 选填 可选项目雷彪
   @params option <any> 选填 选项默认值
   @params title <string> 选填 选项名称
   **/
  public editor: any;
  @Input('data') _data: any
  @Output() dataChange = new EventEmitter<any>();

  get data(): any {
    return this._data
  }
  set data(v) {
    this.dataChange.emit(this.data)
    this._data = v
  }
  constructor() {
  }
  ngAfterViewChecked() {
    // console.log("tinymce初始化")
    this.tinymceInit()
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
  tinymceInit() {
    /**
     *  【非常重要】
     *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
     */
    tinymce.init({
      selector: 'textarea.content-area',
      skin_url: '/assets/scripts/tinymce/skins/lightgray',
      //menubar:false,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      menubar: false,
      toolbar: [
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link",
        "preview | forecolor backcolor | table | code",
      ],
      image_advtab: true,
      // codesample_content_css: '/assets/css/prism.css',
      //文件和图片上传相关的选项
      file_browser_callback_types: 'image',
      file_browser_callback: function(field_name, url, type, win) {
        console.log(type);
        console.log(type == 'image');
        if (type == 'image') {
          let event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
          let fileInput = document.getElementById('img_input');
          fileInput.dispatchEvent(event);
        }
      },
      setup: editor => {
        this.editor = editor;
        // this.editor.setContent(this.data) //设置初始值
      },
      init_instance_callback: editor => {
        console.log("init_instance_callback", this.data)
        if (this.data && this.data !== "") {
          this.editor.setContent(this.data) //设置初始值
        }
        editor.on('keyup', () => {
          this.data = this.editor.getContent();
        });
        editor.on('change', (e) => {
          this.data = this.editor.getContent();
        });
        editor.on('NodeChange', (e) => {
          this.data = this.editor.getContent();
        });
      },
    });
  }

}
