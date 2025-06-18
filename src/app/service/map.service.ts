import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map!: L.Map;
  private routingControl!: L.Routing.Control;

  constructor() { }

  initMap(containerId: string): void {
    this.map = L.map(containerId).setView([6.0395, 80.2194], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  plotRoute(start: [number, number], end: [number, number]): L.Routing.Control {
    const customIcon = L.icon({
      iconUrl: 'assets/custom-icon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    this.routingControl = (L as any).Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: '#3f51b5', weight: 5 }]
      },
      createMarker: (i: number, waypoint: L.Routing.Waypoint, n: number) => {
        return L.marker(waypoint.latLng, {
          draggable: true,
          icon: L.divIcon({
            className: i === 0 ? 'pin_drop' : 'maps_ugc',
            html: `<div class="marker ${i === 0 ? 'bg-green-500' : 'bg-red-500'}">${i === 0 ? 'Start' : 'Destionation'}</div>`,
            iconSize: [30, 30],
            popupAnchor: [0, -32],
            iconAnchor:[16,32]
          })
        });
      }
    }).addTo(this.map);

    const bounds = L.latLngBounds([start, end]);
    this.map.fitBounds(bounds, { padding: [50, 50] });
    return this.routingControl;
  }
}
