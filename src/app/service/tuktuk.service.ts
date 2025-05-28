import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class TuktukService {

  galleTukTukList:BikeInterface[]=[
   
     {bikeId:'galletukb1',bikeName:'bajaj 2 stroke',color:'red',condition:'good',quantity:1,img:'tuktuk1.jpg',rating:4,ratePerDay:200},
     {bikeId:'galletukb2',bikeName:'bajaj 2 stroke',color:'green',condition:'mint condition',quantity:1,img:'tuktuk2.jpg',rating:5,ratePerDay:500}  ,
     {bikeId:'galletukb1',bikeName:'bajaj 2 stroke',color:'red',condition:'good',quantity:1,img:'tuktuk3.jpg',rating:4,ratePerDay:200},
     {bikeId:'galletukb2',bikeName:'bajaj 2 stroke',color:'green',condition:'mint condition',quantity:1,img:'tuktuk4.jpg',rating:5,ratePerDay:500} 
   ];
   
   jaffanaTukTukList:BikeInterface[]=[
   
     {bikeId:'jaffnatukb1',bikeName:'bajaj 2 sttoke ',color:'red',condition:'good',quantity:1,img:'tuktuk1.jpg',rating:4,ratePerDay:200},
     {bikeId:'jaffnatukb2',bikeName:'bajaj 2 stroke',color:'green',condition:'mint condition',quantity:1,img:'tuktuk2.jpg',rating:5,ratePerDay:500}  
     
   ];
   mataraTukTukList:BikeInterface[]=[
   
     {bikeId:'mataratukb1',bikeName:'bajaj 2 sttoke',color:'red',condition:'good',quantity:1,img:'tuktuk1.jpg',rating:4,ratePerDay:200},
     {bikeId:'mataratukb2',bikeName:'bajaj 2 sttoke',color:'green',condition:'mint condition',quantity:1,img:'tuktuk2.jpg',rating:5,ratePerDay:500}  
     
   ];
   
   hikkaTukTukList:BikeInterface[]=[
   
     {bikeId:'hikkatukb1',bikeName:'bajaj 2 sttoke',color:'red',condition:'good',quantity:1,img:'tuktuk3.jpg',rating:4,ratePerDay:200},
     {bikeId:'hikkatukb2',bikeName:'bajaj 2 sttoke',color:'green',condition:'mint condition',quantity:1,img:'tuktuk4.jpg',rating:5,ratePerDay:500}  
     
   ];
   
   nuwaraTukTukList:BikeInterface[]=[
   
     {bikeId:'nuwaratukb1',bikeName:'bajaj 2 stroke',color:'red',condition:'good',quantity:1,img:'tuktuk1.jpg',rating:4,ratePerDay:200},
     {bikeId:'nuwaratukb2',bikeName:'bajaj 2 stroke',color:'green',condition:'mint condition',quantity:1,img:'tuktuk3.jpg',rating:5,ratePerDay:500}  
     
   ];
   

   
     getGalleTukTukList():BikeInterface[]{
       return this.galleTukTukList;
     }
   
     getJaffanaTukTukList():BikeInterface[]{
       return this.jaffanaTukTukList;
     }
   
     getMataraTukTukList():BikeInterface[]{
       return this.mataraTukTukList;
     }
   
     getHikkaTukTukList():BikeInterface[]{
       return this.hikkaTukTukList;
     }
   
     getNuwaraTukTukist():BikeInterface[]{
       return this.nuwaraTukTukList;
     }
}
