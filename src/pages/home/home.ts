import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  CameraPosition,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker,
  Geolocation
} from 'ionic-native';
import { DiscoverSpotListElement } from '../../components/discover-spot-list-element/discover-spot-list-element';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [DiscoverSpotListElement]
})
export class HomePage {
  public map: GoogleMap;
  public searchSpotName: string = "";

  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {
    this.platform.ready().then(() => this.loadMap());
  }

  loadMap() {
    Geolocation.getCurrentPosition().then((position) => {
      let location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);

      this.map = new GoogleMap('map', {
        'styles': [{ "stylers": [{ "hue": "#ff1a00" }, { "invert_lightness": true }, { "saturation": -100 }, { "lightness": 33 }, { "gamma": 0.5 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2D333C" }] }],
        'controls': {
          'compass': true,
          'myLocationButton': true,
          // 'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': location,
          'zoom': 12,
          'bearing': 50
        }
      });

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!');

      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  onSearchSpotName(event) {
    console.log(`New search spot name: ${this.searchSpotName}`);
  }

}
