import { Component } from '@angular/core';
import {Http} from "@angular/http";
import { NavController } from 'ionic-angular';
// import { Cloud } from '../../../providers/cloud';
import { SigningUpPage} from'../signing-up/signing-up';

@Component({
  selector:'user-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user:{username?:string,password?:string} = {username: "", password: ""}
  checkit:Boolean;
  loginin:any;
  count:any;
  localUser:{username?:string,password?:string}={};
  profiles:any;
  departments:any;
  signingUpPage: any = SigningUpPage;
  constructor(private nav: NavController,private http:Http) {

    this.loginin=false;
    
    if(this.localUser.username=null){
      this.checkit=false;
    }
    else {this.checkit=true;}

    this.count=0;

  }

  login()
  {
    // this.cloud.login(this.user);
  }

  loginoauth(type)
  {
    // this.cloud.loginoauth(type);
  }

  change(){

    if(this.count%2==0)
    {

    }
    else{

    }
    this.count++;
  }


}
