import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  CameraPosition,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker,
  Geolocation,
  Toast
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

  private position = {
    lat: 41.0627046,
    lng: 28.9935045
  };

  loadMap() {
    let location = new GoogleMapsLatLng(this.position.lat, this.position.lng);

    this.map = new GoogleMap('map', {
      'styles': [{ "stylers": [{ "hue": "#ff1a00" }, { "invert_lightness": true }, { "saturation": -100 }, { "lightness": 33 }, { "gamma": 0.5 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2D333C" }] }],
      'controls': {
        'myLocationButton': true,
        // 'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'zoom': true
      },
      'camera': {
        'latLng': location,
        'zoom': 14,
        'bearing': 50
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready, adding markers!');

      // Add 30 random markers
      for (let i = 0; i < 40; i++) {
        this.addRandomMarker(this.position);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  addRandomMarker(position) {
    const randomLoc = new GoogleMapsLatLng(position.lat + 2 * Math.random() / 40 - 0.025,
      position.lng + 2 * Math.random() / 40 - 0.025);

    // create new marker
    let markerOptions: GoogleMapsMarkerOptions = {
      position: randomLoc,
      title: 'Dummy Spot',
      icon: {
        url: 'data:image/png;base64,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',
        size: {
          // Scale by 1/2
          width: 19,
          height: 28
        }
      }
    };


    this.map.addMarker(markerOptions)
      .then((marker: GoogleMapsMarker) => {
        console.log("Visible: " + marker.isVisible());
      });
  }

  onSearchSpotName(event) {
    console.log(`New search spot name: ${this.searchSpotName}`);
  }

  showSoonToast() {
    Toast.showLongTop('Mesajlaşma özelliği çok yakında.');
  }

}
