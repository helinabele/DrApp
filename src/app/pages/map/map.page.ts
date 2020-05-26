import { Component, OnInit, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage{
  map: any;
  lat;
  lng;

  @ViewChild('map', {static: true}) mapElement;

  constructor(private geo: Geolocation) {
  }

  getMyLocation() {
    this.geo.getCurrentPosition({
      enableHighAccuracy: true
    }).then(location => {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude
    })
  }
  
  /* loadMap() {
    let latLng = new google.maps.LatLng(this.lat, this.lng);
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
  } */
 /* ngOnInit(): void {
  }

   ngAfterContentInit(): void {
     this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        }) ;
  }
 */
ngOnInit(){
  this.initMap();
}

initMap(){
  let coords = new google.maps.LatLng(9.021077, 38.749598);
  let mapOptions: google.maps.MapOptions = {
    center : coords,
    zoom: 11,
    mapTypeId: 'roadmap'
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)
  
 let marker: google.maps.Marker = new google.maps.Marker({
    map: this.map,
    position: coords
  }) 
}
}
