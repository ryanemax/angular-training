import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { LoginPage } from './login/login';
import { SigningUpPage } from './signing-up/signing-up';
import { PipesModule } from '../../pipes/pipes.module'

import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';


@NgModule({
  declarations: [
   LoginPage, SigningUpPage, UserPage, 
   AboutPage,ContactPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(UserPage),
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(SigningUpPage),
    IonicPageModule.forChild(AboutPage),
    IonicPageModule.forChild(ContactPage),
  ],
  exports: [
    LoginPage, SigningUpPage, UserPage, 
   AboutPage,ContactPage
  ]
})
export class UserModule {}
