import { Component } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { BikeService } from '../../../../service/bike.service';

@Component({
    selector: 'app-nuwararentbikes',
    templateUrl: './nuwararentbikes.component.html',
    styleUrl: './nuwararentbikes.component.css',
    standalone: false
})
export class NuwararentbikesComponent {
  btnCaption = "Back";
  btnColor = "red";
  constructor(private bikeService:BikeService ){}

  ngOnInit(): void {
    this.bikeList = this.bikeService.getNuwaraBikeList();
  }
  

    bikeList:BikeInterface[]=[];
}
