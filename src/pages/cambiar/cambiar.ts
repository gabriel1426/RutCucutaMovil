import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
//import leaflet from "leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

/**
 * Generated class for the CambiarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cambiar",
  templateUrl: "cambiar.html"
})
export class CambiarPage {
  @ViewChild("map") mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    this.map = L.map("map").setView([-0.1836298, -78.4821206], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 20
    }).addTo(this.map);
    this.map
      .locate({
        setView: true,
        maxZoom: 5
      })
      .on("locationfound", e => {
        console.log("found you");
      });

    L.Routing.control({
      waypoints: [
        L.latLng(7.9279225, -72.5041867),
        L.latLng(7.9313901, -72.5032358),
        L.latLng(7.9301942, -72.5035245)
      ],
      
      routeWhileDragging: false
    }).addTo(this.map);
  }
}
