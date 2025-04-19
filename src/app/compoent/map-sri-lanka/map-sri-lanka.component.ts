import { Component } from '@angular/core';

@Component({
    selector: 'app-map-sri-lanka',
    templateUrl: './map-sri-lanka.component.html',
    styleUrl: './map-sri-lanka.component.css',
    standalone: false
})
export class MapSriLankaComponent {
    slMap:string="mapSl.png";

    slDestinations:any[]=[
      {
        name:"Southern Province",link:"rect1.png",description:"20+ Spots"
      },
      {
        name:"North Province",link:"rect2.png",description:"25+ Spots"
      },
      {
        name:"Central Provin",link:"rect3.png",description:"25+ Spots"
      },
    ];
        
    
}
