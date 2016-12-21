import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { Toast, Camera } from 'ionic-native';

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
            // console.log('Spot Paylaş clicked');
            // let shareModal = this.modalCtrl.create(ShareModal, { title: 'Spot Paylaş' });
            // shareModal.present();
            // shareModal.onDidDismiss((imgData) => {
            //   this.showToast('Spotunuz başarıyla yüklendi!', 'top');
            // });
            Camera.getPicture({
              quality: 75,
              sourceType: Camera.PictureSourceType.CAMERA, // TODO: Change to camera on prod
              destinationType: Camera.DestinationType.DATA_URL,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              saveToPhotoAlbum: false
            }).then((imageData) => {
              // imageData is a base64 encoded string
              Toast.showLongTop('Spotunuz başarıyla yüklendi!');
              Camera.cleanup();
            }, (err) => {
              Toast.showLongTop('Spotunuz başarıyla yüklendi!');
              console.log(err);
            });
          }
        }, {
          text: 'Fotoğraf / Video Paylaş',
          handler: () => {
            // console.log('Fotoğraf / Video Paylaş clicked');
            // let shareModal = this.modalCtrl.create(ShareModal, { title: 'Fotoğraf / Video Paylaş' });
            // shareModal.present();

            Camera.getPicture({
              quality: 75,
              sourceType: Camera.PictureSourceType.PHOTOLIBRARY, // TODO: Change to camera on prod
              destinationType: Camera.DestinationType.DATA_URL,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              saveToPhotoAlbum: false
            }).then((imageData) => {
              // imageData is a base64 encoded string
              Toast.showLongTop('Fotoğrafınız başarıyla paylaşıldı!');
              Camera.cleanup();
            }, (err) => {
              Toast.showLongTop('Fotoğrafınız başarıyla paylaşıldı!');
              console.log(err);
            });
          }
        }
      ]
    });
    actionSheet.present();
  }

}
