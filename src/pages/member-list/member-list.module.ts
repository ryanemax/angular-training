import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberList } from './member-list';
import { MemberListPopover } from './list-popover';

import { PipesModule } from '../../pipes/pipes.module'
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  declarations: [
    MemberList,MemberListPopover
  ],
  imports: [
    PipesModule,
    ComponentsModule,
    IonicPageModule.forChild(MemberList),
    IonicPageModule.forChild(MemberListPopover),
  ],
  exports: [
    MemberList,MemberListPopover
  ]
})
export class MemberListModule {}
