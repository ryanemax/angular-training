import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { UserService } from './user'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  providers:[UserService]
})
export class ProvidersModule { }