import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberList } from './member-list';


import { PipesModule } from '../../pipes/pipes.module'
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    MemberList,
  ],
  imports: [
    PipesModule,
    ComponentsModule,
    IonicPageModule.forChild(MemberList),
  ],
  exports: [
    MemberList
  ]
})
export class MemberListModule {}
