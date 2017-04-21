import { Component} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// import { Content, ViewChild  } from 'ionic-angular';
// import { Cloud } from '../../providers/cloud';
// import { UserSettingPage } from '../user/setting/setting';
// import { MessagePage } from '../user/message/message';
// import { UserDownloadPage } from '../user/download/download';
// import { UserCertifyPage } from '../user/certify/certify';
// import { UserCollectPage} from '../user/collect/collect';
// import { InfoPage} from '../user/info/info';


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
  public headerOpacity: any = 1
  currentUser: any

  constructor(private nav: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // this.currentUser = Parse.User.current()
    // this.cloud.notifyCheck()

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

}
