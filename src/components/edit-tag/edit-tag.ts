import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AlertController} from 'ionic-angular';

@Component({
  selector: 'edit-tag',
  templateUrl: 'edit-tag.html'
})
export class EditTag {
  @Input() title: any = "";
  @Output() getTags = new EventEmitter<any[]>();
  tag: any;
  tags: any[] = [];
  isAbled: boolean = false;
  constructor(public alertCtrl: AlertController) {
  }

  addTag() {
    //需判断this.tag中是否有内容
    this.tags.push(this.tag);
    this.tag = null;
    if (this.tags.length == 5) {
      this.isAbled = true;
    } else if (this.isAbled) {
      this.isAbled = false;
    }
    this.getTags.emit(this.tags);
  }
  delete(chip: Element, index: any) {
    if (this.isAbled) {
      this.isAbled = false;
    }
    chip.remove();
    if (index == this.tags.length - 1) {
      this.tags.pop();
    } else if (index == 0) {
      this.tags = this.tags.slice(1, this.tags.length);
    } else {
      this.tags = this.tags.slice(0, index).concat(this.tags.slice(index + 1, this.tags.length));
    }
    this.getTags.emit(this.tags);
  }
}
