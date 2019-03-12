/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from '../core/firebase.service';
// import { } from '@types/googlemaps';

import { GoogleMapsAPIWrapper, MapsAPILoader, AgmCoreModule, } from '@agm/core';
import { Observable } from 'rxjs';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = 'My first AGM project';
  phonesLat = 5.978772;
  zoom = 10;
  phonesLng = 80.430600; // weligama
  middlesLat = 6.023606;
  middlesLng = 80.496578; // thelijjawila
  homesLat = 6.023761;
  homesLng = 80.509728; // home

  points: Observable<any>;

  origin: any;
  destination: any;
  waypoints: any[];

  @ViewChild('AgmMap') agmMap: ElementRef;

  constructor(
    public mapApiWrapper: GoogleMapsAPIWrapper,
    private firebaseService: FirebaseService,
    public mapsAPILoader: MapsAPILoader) { }

  onZoom() {
    this.zoom++;
    console.log(this.zoom);
  }
  onZoomOut() {
    this.zoom--;
  }

  onMapReady(map) {
    // const mexicoCity = new google.maps.LatLng(19.432608, -99.133209);
    const users = this.firebaseService.getUsers().subscribe(res => {
      console.log(res[0]);
      console.log('mapReady', map);
      const results = JSON.parse(res[0].location);
      const rideCoordinates = google.maps.geometry.encoding.decodePath(results.routes[0].overview_polyline.points);
      const ridePath = new google.maps.Polyline({
        map: map,
        path: rideCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
    });

  }
  public change(event: any) {
    this.waypoints = event.request.waypoints;
    // console.log('change', event.request);
  }
  getDirection() {
    this.origin = { lat: this.phonesLat, lng: this.phonesLng };
    this.destination = { lat: this.homesLat, lng: this.homesLng };
    this.waypoints = [{ location: { lat: this.middlesLat, lng: this.middlesLng } }];

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }
  ngOnInit() {
    this.getDirection();
    this.points = this.firebaseService.getUsers();
    // console.log(this.calculateDistance());
    this.calculateDistance();
  }


  calculateDistance() {

    // this.mapsAPILoader.load().then((x) => {

    //   const map = new google.maps.Map(this.agmMap, {
    //     zoom: 13,
    //     center: mexicoCity,
    //     mapTypeId: 'roadmap'
    //   });
    //   /* do anything you want with google map object */
    //   console.log('map', x);
    // });

    // this.mapApiWrapper.getNativeMap().then( map => {
    //   console.log('map2', map);
    // }, err => console.log('map2failed'));
    // const mexicoCity = new google.maps.LatLng(19.432608, -99.133209);
    // const jacksonville = new google.maps.LatLng(40.730610, -73.935242);
    // const distance = google.maps.geometry.spherical.computeDistanceBetween(mexicoCity, jacksonville);
    // return distance;
  }


}
