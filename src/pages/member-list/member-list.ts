import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { MemberEdit } from '../member-edit/member-edit'


import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'

import { UserService } from "../../providers/user"

@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html'
})
export class MemberList {
  members:Array<any>
  memberEditPage:any = MemberEdit
  skills:Array<any>;
  startTime:any;
  currentMember:any;


  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public actionCtrl:ActionSheetController,
  private http:Http,
  private userServ:UserService) {
    this.userServ.findClasses("Member").then(data=>{
        if(data&&data.json().results){
          this.members = data.json().results
        }
    })
  }

  refreshData(refresher){
  this.userServ.findClasses("Member").then(data=>{
        if(data&&data.json().results){
          this.members = data.json().results
           refresher.complete();
        }
    })
  }


  printMember(member){
    console.log(member)
    this.currentMember = member
  }
  setSkills(skills){
    console.log(skills)
    this.skills = skills
  }
  sortList(){
    let tempList = []
    this.members.forEach(member=>{


    })
    this.members = tempList
  }
  presentConfirm(){
    let opts = {
     title: '操作确认',
     buttons: [
       {
         text: '删除',
         role: 'destructive',
         handler: ()=>{
           console.log("Click 删除")
         }
       },
       {
         text: '新增',
         handler: () => {
           console.log('Archive clicked');
           this.navCtrl.push(this.memberEditPage)
         }
       },
       {
         text: '取消',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   }

    let actionsheet = this.actionCtrl.create(opts)
    actionsheet.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
