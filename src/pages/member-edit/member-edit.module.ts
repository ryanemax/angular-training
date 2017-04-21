import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberEdit } from './member-edit';

@NgModule({
  declarations: [
    MemberEdit,
  ],
  imports: [
    IonicPageModule.forChild(MemberEdit),
  ],
  exports: [
    MemberEdit
  ]
})
export class MemberEditModule {}
