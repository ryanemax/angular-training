import { Component } from '@angular/core';
import { NavController, Events} from 'ionic-angular';
// import { Cloud } from '../../../providers/cloud';

@Component({
  templateUrl: 'signing-up.html'
})
export class SigningUpPage {

  user: { username?: string, password?: string, mobile?: string, email?: string } = { username: "", password: ""}

  constructor(private nav: NavController, public events: Events) {

  }

  sign() {
    this.user.username = this.user.mobile
    // this.cloud.signup(this.user);
  }
}
