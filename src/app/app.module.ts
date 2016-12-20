import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { ShareModal, SelectLocation } from '../pages/share/shareModal';
import { LoginPage } from '../pages/login/login';
import { DiscoverSpotListElement } from '../components/discover-spot-list-element/discover-spot-list-element';
import { SkateMateLogoComponent } from '../components/skate-mate-logo/skate-mate-logo';

@NgModule({
  declarations: [
    MyApp,
    NotificationsPage,
    HomePage,
    ProfilePage,
    TabsPage,
    ShareModal,
    SelectLocation,
    LoginPage,
    DiscoverSpotListElement,
    SkateMateLogoComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationsPage,
    HomePage,
    ProfilePage,
    TabsPage,
    ShareModal,
    SelectLocation,
    LoginPage,
    SkateMateLogoComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
