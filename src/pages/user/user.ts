import { Component} from '@angular/core';
import { NavController, NavParams, AlertController,Platform } from 'ionic-angular';
// import { Diagnostic } from "@ionic-native/diagnostic"

// import { Content, ViewChild  } from 'ionic-angular';
// import { Cloud } from '../../providers/cloud';
// import { UserSettingPage } from '../user/setting/setting';
// import { MessagePage } from '../user/message/message';
// import { UserDownloadPage } from '../user/download/download';
// import { UserCertifyPage } from '../user/certify/certify';
// import { UserCollectPage} from '../user/collect/collect';
// import { InfoPage} from '../user/info/info';
import { LoginPage} from '../user/login/login';


@Component({
  selector: "user-home",
  templateUrl: 'user.html'
})
export class UserPage {
  // @ViewChild(Content) content: Content;
  // settingPage: any = UserSettingPage
  // messagePage: any = MessagePage
  // downloadPage: any = UserDownloadPage
  // collectPage: any = UserCollectPage
  // certifyPage: any = UserCertifyPage
  // infoPage: any = InfoPage
  loginPage:any = LoginPage
  public headerOpacity: any = 1
  currentUser: any

  constructor(private nav: NavController, public navParams: NavParams, public alertCtrl: AlertController,
  // public diagnostic:Diagnostic,
  public platform:Platform) {
    // this.currentUser = Parse.User.current()
    // this.cloud.notifyCheck()
    this.update()
  }
  doWhenScroll(scroller) {
    // this.headerOpacity = this.content.scrollTop / (44 + 200)
  }
  logout() {
    let alert = this.alertCtrl.create({
      title: '注销账号',
      message: '您确定要注销，退出当前账号吗？',
      buttons: [
        {
          text: '取消',
          handler: () => {
          }
        },
        {
          text: '确认',
          handler: () => {
            // this.cloud.logout()
          }
        }
      ]
    })
    alert.present()
  }

  update(){
      let lastVersion = "0.0.2"
      let currentVersion = "0.0.2"
      let changelog = `
      - 新增：学员管理模块
      - 新增：我的中心模块
      `
     if (lastVersion > currentVersion) {

          let confirm = this.alertCtrl.create({
            title: '新版本更新' + lastVersion,
            message: `<pre style="text-align:left">${changelog}</pre>`,
            mode:"ios",
            buttons: [
              {
                text: '取消',
                handler: () => {
                  confirm.dismiss()
                }
              },
              {
                text: '更新',
                handler: () => {
                  let isiOS = this.platform.is("ios")
                  let isAndroid = this.platform.is("android")
                  if(isiOS){
                    window.open("http://www.accenture.com","_blank")
                  }
                  if(isAndroid){
                    console.log("run android update plugin")
                  }
                }
              }
            ]
          });
          confirm.present()
        }

  }
}
