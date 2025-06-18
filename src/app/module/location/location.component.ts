import { Component, OnInit,} from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-location',
  standalone: false,
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  startLocation: string = '';
  endLocation: string = '';
  distance: string = '0.00';
  time: string = '0';
  currentMode: string = 'car';
  private map!: L.Map;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.mapService.initMap('map');
  }

  setActiveMode(mode: string): void {
    this.currentMode = mode;
  }

  calculateRoute(): void {
    if (!this.startLocation || !this.endLocation) {
      alert('Please enter both start and end locations');
      return;
    }

    this.geocode(this.startLocation, (startLat, startLon) => {
      this.geocode(this.endLocation, (endLat, endLon) => {
        const routingControl = this.mapService.plotRoute([startLat, startLon], [endLat, endLon]);

        routingControl.on('routesfound', (e: any) => {
          const routes = e.routes;
          if (routes.length) {
            this.distance = (routes[0].summary.totalDistance / 1000).toFixed(2);
            this.time = Math.round(routes[0].summary.totalTime / 60).toString();
          }
        });
      });
    });
  }

  loadDemoRoute(): void {
    this.calculateRoute();
  }

  private geocode(address: string, callback: (lat: number, lon: number) => void): void {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${address},SriLanka`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          console.log(lat,lon);

          callback(lat, lon);
         // this.map.setView([parseFloat(this.startLocation),parseFloat(this.endLocation)]);
        } else {
          alert('Location not found: ' + address);
        }
      })
      .catch(error => {
        console.error('Geocoding error:', error);
        alert('Error finding location: ' + address);
      });
  }

}
