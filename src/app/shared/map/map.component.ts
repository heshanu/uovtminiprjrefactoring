
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../service/spinner.service';


@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit,OnInit {

  isLoading$!:Observable<boolean>;

  constructor(private spinnerService:SpinnerService){}

  ngOnInit(): void {
    this.isLoading$=this.spinnerService.loading$;
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.spinnerService.showLoading();
    // Coordinates (Hikkaduwa to Galle)
    const hikkaduwa = L.latLng(6.1396, 80.1072);
    const galle = L.latLng(6.0535, 80.2210);

    // Create map centered on Sri Lanka
    const map = L.map('route-map').setView([6.9271, 79.8612], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add route
    L.Routing.control({
      waypoints: [hikkaduwa, galle],
      routeWhileDragging: true,
      showAlternatives: true,
      fitSelectedRoutes: true,
      lineOptions: {
        styles: [{ color: '#3a7bd5', opacity: 0.7, weight: 5 }],
        extendToWaypoints: false,
        missingRouteTolerance: 0
      }
    }).addTo(map);

    // Add markers
    L.marker(hikkaduwa).addTo(map)
      .bindPopup('Hikkaduwa')
      .openPopup();

    L.marker(galle).addTo(map)
      .bindPopup('Galle Fort');
     this.spinnerService.hideLoading(); 
  }

}
