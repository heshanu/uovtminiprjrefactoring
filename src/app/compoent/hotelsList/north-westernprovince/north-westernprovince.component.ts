import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-north-westernprovince',
    templateUrl: './north-westernprovince.component.html',
    styleUrl: './north-westernprovince.component.css',
    standalone: false
})
export class NorthWesternprovinceComponent implements OnInit{

  constructor(private hotelService:HotelserviceService){}
    
      ngOnInit(): void {
        this.getorthWestHotellList();
      }
    
      northWestHotel:HotelsListInterface[]=[];
    
      getorthWestHotellList():void{
        this.northWestHotel= this.hotelService.getNorthWest();
      }
}
