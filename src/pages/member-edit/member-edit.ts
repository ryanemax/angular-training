import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {UserService} from "../../providers/user"
@IonicPage()
@Component({
  selector: 'page-member-edit',
  templateUrl: 'member-edit.html',
})
export class MemberEdit {
  startTime:any
  object:any = {
    name:"",
    github:"",
    sex:"",
    age:"",
    exam1:"",
    exam2:"",
    exam3:""
  }
  currentMember:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public userServ:UserService,public viewCtrl:ViewController) {
    this.startTime = new Date()
    this.currentMember = this.navParams.data.member
    if(this.currentMember){
      console.log(this.currentMember)
      this.object = this.currentMember
    }
  }

save(){
  if(!this.object.name||!this.object.github){
    console.log("您的信息不完整，请重新填写")
  }
  this.userServ.saveClass("Member",this.object).then(data=>{
    console.log(data)
    this.object.id = data.json().objectId
    this.object.createdAt = data.json().createAt
    this.viewCtrl.dismiss(this.object)
  }).catch(err=>{
    console.log(err)
  })


}
returnToHistory(){
   this.viewCtrl.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberEdit');
  }
ngOnDestroy(){
  console.log("您访问该页面的时间：",this.startTime)
}

}
