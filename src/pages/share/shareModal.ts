import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { App, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'shareModal.html'
})
export class ShareModal {
  public title: String;
  public base64Image: String;

  constructor(
    public appCtrl: App,
    public viewCtrl: ViewController
  ) { }

  takePicture() {
    Camera.getPicture({
      quality: 75,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY, // TODO: Change to camera on prod
      destinationType: Camera.DestinationType.DATA_URL,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      Camera.cleanup();
    }, (err) => {
      console.log(err);
    });
  }

  popPage() {
    this.viewCtrl.dismiss();
  }

  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(SelectLocation, {
      shareModal: this
    });
  }
}

@Component({
  templateUrl: 'selectLocation.html'
})
export class SelectLocation  {
  public shareModal: ShareModal

  constructor() { }
}
