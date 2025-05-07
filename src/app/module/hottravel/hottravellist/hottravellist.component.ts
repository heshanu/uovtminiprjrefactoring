import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../../service/photo-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hottravellist',
  standalone: false,
  templateUrl: './hottravellist.component.html',
  styleUrl: './hottravellist.component.css'
})

export class HottravellistComponent implements OnDestroy {

constructor(private http:HttpClient,private photoService:PhotoServiceService){}

imageData!: any[];

startPlace!:string;

destionationPlace!:string;

photoSubs!:Subscription;

image!: string;

inputValue:string = '';



  ngOnDestroy(): void {
    if(this.photoSubs){
      this.photoSubs.unsubscribe();
    }
  }

  send(){
    console.log(this.destionationPlace,this.startPlace);
    
  }

}
