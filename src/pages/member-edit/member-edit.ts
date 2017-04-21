import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-member-edit',
  templateUrl: 'member-edit.html',
})
export class MemberEdit {
  startTime:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startTime = new Date()
  }
returnToHistory(){
  this.navCtrl.pop()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberEdit');
  }
ngOnDestroy(){
  console.log("您访问该页面的时间：",this.startTime)
}

}
