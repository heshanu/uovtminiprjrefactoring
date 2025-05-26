import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { VanService } from '../../../../service/van.service';
import { CarService } from '../../../../service/car.service';

@Component({
    selector: 'app-gallecar',
    templateUrl: './gallecar.component.html',
    styleUrl: './gallecar.component.css',
    standalone: false
})
export class GallecarComponent implements OnInit{

  constructor(private carService:CarService ){}
  carList:BikeInterface[]=[];
    
    ngOnInit(): void {
      this.carList = this.carService.getGalleCarList();
    //  console.log(this.vanList);
      
    }
    
    

}
