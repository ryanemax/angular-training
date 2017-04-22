import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {UserService} from "../../../providers/user"

@Component({
  selector: 'page-member-edit',
  templateUrl: 'member-edit.html',
})
export class MemberEdit {
  startTime:Date
  object:any = {
    name:"",
    avatar:"",
    address:"",
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

      Object.keys(this.currentMember).forEach(key=>{
        if(key=="createdAt") return
        if(key=="updatedAt") return
        this.object[key] = this.currentMember[key]
      })
    }
  }

save(){
  if(!this.object.name||!this.object.github){
    console.log("您的信息不完整，请重新填写")
    return
  }

  if(this.currentMember){
    this.userServ.updateClass("Member",this.currentMember.objectId,this.object).then(data=>{
      Object.keys(this.object).forEach(key=>{
        this.currentMember[key] = this.object[key]
      })
      this.viewCtrl.dismiss()
    }).catch(err=>{
    console.log(err)
  })
  }else{
  this.userServ.saveClass("Member",this.object).then(data=>{
    let res:any = data
    console.log(res)
    this.object.objectId = res.json().objectId
    this.object.createdAt = res.json().createAt
    this.viewCtrl.dismiss(this.object)
  }).catch(err=>{
    console.log(err)
  })
 }

}
returnToHistory(){
   this.viewCtrl.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberEdit');
  }
ngOnDestroy(){
  // let leaveTime = new Date()
  // leaveTime.toDateString()
  console.log("您在当前页面停留时间：", this.startTime.toDateString())
}

}
