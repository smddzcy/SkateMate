import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { ShareModal } from '../share/shareModal';

@Component({
  templateUrl: 'tabs.html',
  entryComponents: [
    ShareModal
  ]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  discoverRoot: any = HomePage;
  notificationsRoot: any = NotificationsPage;
  profileRoot: any = ProfilePage;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
  ) { }

  presentShareActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Spot Paylaş',
          handler: () => {
            console.log('Spot Paylaş clicked');
            let profileModal = this.modalCtrl.create(ShareModal, { title: 'Spot Paylaş' });
            profileModal.present();
          }
        }, {
          text: 'Fotoğraf / Video Paylaş',
          handler: () => {
            console.log('Fotoğraf / Video Paylaş clicked');
            let profileModal = this.modalCtrl.create(ShareModal, { title: 'Fotoğraf / Video Paylaş' });
            profileModal.present();
          }
        }
      ]
    });
    actionSheet.present();
  }

}
