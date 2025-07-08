import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { GeoService } from '../../service/geo.service';
import { SpinnerService } from '../../service/spinner.service';
import { finalize, Observable,forkJoin } from 'rxjs';


@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements  AfterViewInit ,OnInit {
  private routingControl!: L.Routing.Control;

  isLoading$!:Observable<boolean>;

  constructor(private geoService :GeoService,private spinnerService:SpinnerService ){}

  ngOnInit(): void {
    this.isLoading$=this.spinnerService.loading$;
  }

  coordinates: any;

  startPlace!:string;
  destinationPlace!:string;


  startPlacelat!:number;
  startplacelng!:number;
  endPlacelat!:number;
  endPlacelng!:number;

  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Define the waypoints
   const waypoints = [
      L.latLng(6.1395, 80.1063), // Starting point
      L.latLng(6.0329, 80.2168) // Destination point
    ];

  // Create a routing control and add it to the map
  /*
L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true
    }).addTo(this.map);
*/
      // Add markers for the two destinations
    L.marker([6.1395, 80.1063]).addTo(this.map)
      .bindPopup('Start').openPopup();
  }

  getCoordinates() {
    if (!this.startPlace || !this.destinationPlace) {
      alert('Please enter both start and destination locations');
      return;
    }

    this.spinnerService.showLoading();

    // Clear previous route if exists
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    const startPlaceRequest = this.geoService.getCoordinates(`${this.startPlace},SriLanka`)
      .pipe(finalize(() => this.spinnerService.hideLoading()));

    const destinationPlaceRequest = this.geoService.getCoordinates(`${this.destinationPlace},SriLanka`)
      .pipe(finalize(() => this.spinnerService.hideLoading()));

    forkJoin([startPlaceRequest, destinationPlaceRequest]).subscribe(
      ([startData, destinationData]) => {
        // Process start location
        if (startData.results && startData.results.length > 0) {
          this.startPlacelat = startData.results[0].geometry.lat;
          this.startplacelng = startData.results[0].geometry.lng;
          console.log('Start Place:', this.startPlacelat, this.startplacelng);
        } else {
          alert('Start City not found');
          this.spinnerService.hideLoading();
          return;
        }

        // Process destination location
        if (destinationData.results && destinationData.results.length > 0) {
          this.endPlacelat = destinationData.results[0].geometry.lat;
          this.endPlacelng = destinationData.results[0].geometry.lng;
          console.log('Destination Place:', this.endPlacelat, this.endPlacelng);
        } else {
          alert('Destination City not found');
          this.spinnerService.hideLoading();
          return;
        }

        // Define the waypoints
        const waypoints = [
          L.latLng(this.startPlacelat, this.startplacelng), // Starting point
          L.latLng(this.endPlacelat, this.endPlacelng) // Destination point
        ];

        // Create a routing control and add it to the map
        this.routingControl = L.Routing.control({
          waypoints: waypoints,
          routeWhileDragging: true
        }).addTo(this.map);

        // Add markers for the two destinations
        L.marker([this.startPlacelat, this.startplacelng]).addTo(this.map)
          .bindPopup('Start').openPopup();


        L.marker([this.endPlacelat, this.endPlacelng]).addTo(this.map)
          .bindPopup('End').openPopup();

        this.map.flyTo([this.endPlacelat, this.endPlacelng], 13, {
            animate: true,
            duration: 2
          });


      },
      error => {
        console.error('Error fetching coordinates:', error);
        alert('Failed to fetch coordinates');
        this.spinnerService.hideLoading();
      }
    );
  }

}


