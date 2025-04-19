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

photoSubs!:Subscription;

image!: string;

inputValue:string = '';

searchImageByName(imageName: any) {
  if (imageName) {
   this.photoSubs= this.photoService.findImageByName(imageName).subscribe(
      (data) => {
        this.imageData = data.photos;
      },
      error => {
        console.error('Error fetching image', error);
      })
    // Implement your search logic here
  } else {
    console.log('Image name is empty');
  }
}

resetList(){
  this.imageData=[];
}



  ngOnDestroy(): void {
    if(this.photoSubs){
      this.photoSubs.unsubscribe();
    }
  }


}
