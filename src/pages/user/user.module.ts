import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { LoginPage } from './login/login';
import { SigningUpPage } from './signing-up/signing-up';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
   LoginPage, SigningUpPage, UserPage, 
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(UserPage),
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(SigningUpPage),
  ],
  exports: [
    LoginPage, SigningUpPage, UserPage, 
  ]
})
export class UserModule {}
