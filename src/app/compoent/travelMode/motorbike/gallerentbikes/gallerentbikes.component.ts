import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BikeService } from '../../../../service/bike.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-gallerentbikes',
    templateUrl: './gallerentbikes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './gallerentbikes.component.css',
    standalone: false
})
export class GallerentbikesComponent implements OnInit{
  btnCaption = "Back";
  btnColor = "red";

  constructor(private bikeService:BikeService ){}

  ngOnInit(): void {
    this.bikeList = this.bikeService.getGalleBikeList();
  }
  

    bikeList:BikeInterface[]=[];

}
