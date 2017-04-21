import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AlertController} from 'ionic-angular';

@Component({
  selector: 'edit-check',
  templateUrl: 'edit-check.html'
})
export class EditCheck {
  checkIds: Array<any>;
  _options: any;
  @Input() title: string = "选项";
  @Input('option') _option: any;
  @Output() optionChange = new EventEmitter<any>();

  get option(): any {
    return this._option
  }
  set option(v) {
    this.optionChange.emit(v)
    this._option = v
  }
  @Input('options')
  set options(v: any) {
    this._options = v;
    console.log("options:", this._options);
    this.checkIds = Object.keys(this._options);
    console.log("checkIds:", this.checkIds);
  }
  constructor(public alertCtrl: AlertController) {
  }
}
