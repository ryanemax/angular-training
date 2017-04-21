import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


// Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Shared Module
import { PipesModule } from '../pipes/pipes.module'
import { ComponentsModule } from '../components/components.module'
import { ProvidersModule } from "../providers/providers.module"
// import { UserService } from '../providers/user'

// Features Module
import { UserModule } from '../pages/user/user.module'
import { MemberModule } from '../pages/member/member.module'
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    // Core Module
    BrowserModule,
    HttpModule,
    // Shared Module
    PipesModule,
    ComponentsModule,
    ProvidersModule,
    // Features Module
    MemberModule,
    UserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // UserService
  ]
})
export class AppModule {}
