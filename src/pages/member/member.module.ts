import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberEdit } from './member-edit/member-edit';
import { MemberList } from './member-list/member-list';
import { MemberListPopover } from './member-list/list-popover';

import { ProvidersModule } from '../../providers/providers.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    MemberEdit,MemberList,MemberListPopover
  ],
  imports: [
    ProvidersModule,ComponentsModule,
    IonicPageModule.forChild(MemberEdit),
    IonicPageModule.forChild(MemberList),
    IonicPageModule.forChild(MemberListPopover),
  ],
  exports: [
    MemberEdit,MemberList,MemberListPopover
  ]
})
export class MemberModule {}
