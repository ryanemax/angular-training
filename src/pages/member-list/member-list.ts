import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MemberEdit } from '../member-edit/member-edit'
import { MemberListPopover } from './list-popover';

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
  public popCtrl:PopoverController,
  public modalCtrl:ModalController,
  public alertCtrl:AlertController,
  private userServ:UserService) {
    this.userServ.findClasses("Member").then(data=>{
        if(data&&data.json().results){
          this.members = data.json().results
        }
    })
  }
  deleteMember(member){
    let opts = {
      title: '删除学员',
      message: `请问您要删除当前学员${member.name}吗?`,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
            return
          }
        },
        {
          text: '确认',
          handler: () => {
                if(member&&member.objectId){
                  this.userServ.deleteClassById("Member",member.objectId).then(data=>{
                    this.members.filter((item,index)=>{
                      if(item.objectId == member.objectId){
                        this.members.splice(index,1)
                      }
                      })
                  })
                }
          }
        }
      ]
    }
    let deleteConfirm = this.alertCtrl.create(opts)
    deleteConfirm.present()
  }

  refreshData(refresher){
  this.userServ.findClasses("Member").then(data=>{
        if(data&&data.json().results){
          this.members = data.json().results
           refresher.complete();
        }
    })
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
    presentUserEditModal(member?){
      let opts:any = {}
      if(member){
        opts.member = member
      }
          let userAdd = this.modalCtrl.create(this.memberEditPage,opts)
          userAdd.onDidDismiss(data=>{
            if(data){
              this.members.push(data)
            }
          })
          userAdd.present()
    }
  presentPopover(myEvent){
    let popover = this.popCtrl.create(MemberListPopover);
    popover.onDidDismiss(data=>{
      console.log(data)
      if(data){
        if(data == "user") {
          this.presentUserEditModal()
        }
        if(data == "top") {
          return
        }
      }
    })
    popover.present({
      ev: myEvent
    });
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
