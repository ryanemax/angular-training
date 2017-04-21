import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertController} from 'ionic-angular';

@Component({
  selector: 'anas-edit-radio',
  templateUrl: 'edit-radio.html'
})
export class EditRadio {
  /** 标签组件 <Tag> EditRadio
   @params options <Array> 选填 可选项目雷彪
   @params option <any> 选填 选项默认值
   @params title <string> 选填 选项名称
   **/
  @Input('options') _options: any = ['是', '否'];
  @Input() title: string = "选项"
  @Input('option') _option: any
  @Output() optionChange = new EventEmitter<any>();

  get option(): any {
    return this._option
  }
  set option(v) {
    this.optionChange.emit(v)
    this._option = v
  }
  get options(): Array<any> {
    // if (typeof this._options === 'string') return this.config[this._options]
    if (this._options instanceof Array) return this._options
    return this._options
  }

  // private config = {
  //   industry: ['不选择', '服务', '金融', '电信', '教育', '高科技', '政府', '制造', '能源', '媒体', '娱乐', '咨询', '非盈利事业', '公共事业']
  // }
  constructor(public alertCtrl: AlertController) {
  }

  selectOption() {
    let alert = this.alertCtrl.create();
    alert.setTitle(this.title);

    this.options.forEach(option => {
      let setting = {
        type: 'radio',
        label: option,
        value: option,
        check: false
      }
      if (option = this.option) {
        setting.check = true
      }
      alert.addInput(setting);
    })

    alert.addButton('取消');

    alert.addButton({
      text: '确定',
      handler: data => {
        this.option = data;
        if (data == "是") this.option = true
        if (data == "否") this.option = false
      }
    });

    alert.present()
  }
}
