import { NgModule } from '@angular/core';
import { KvArray } from './common'
import { ToK } from './tok'
import { ShowImg } from './show-img';
import { PinYinPipe } from './pinyin-pipe';
import { SanitizeHtmlPipe } from './safe-html';

@NgModule({
  declarations: [
    KvArray, PinYinPipe, SanitizeHtmlPipe, ShowImg, ToK,
  ],
  imports: [

  ],
  exports: [
    KvArray, PinYinPipe, SanitizeHtmlPipe, ShowImg, ToK,
  ]
})
export class PipesModule { }