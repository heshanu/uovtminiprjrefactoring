import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class VanService {

  
  galleVanList:BikeInterface[]=[
  
    {bikeId:'gallevanb1',bikeName:'normal van',color:'red',condition:'good',quantity:1,img:'van1.jpg',rating:4,ratePerDay:200},
    { bikeId: 'gallevanb2', bikeName: 'van', color: 'green', condition: 'mint condition', quantity: 1, img: 'van2.jpg', rating: 5, ratePerDay: 500 },
    {bikeId:'gallevanb1',bikeName:'lumala',color:'red',condition:'good',quantity:1,img:'van3.jpg',rating:4,ratePerDay:200},
    {bikeId:'gallevanb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:1,img:'van4.jpg',rating:5,ratePerDay:500} 
    
  ];
  
  jaffanaVanList:BikeInterface[]=[
  
    {bikeId:'gallevanb1',bikeName:'Van',color:'red',condition:'good',quantity:1,img:'van1.jpg',rating:4,ratePerDay:200},
    {bikeId:'gallevanb2',bikeName:'Van',color:'green',condition:'mint condition',quantity:1,img:'van2.jpg',rating:5,ratePerDay:500}  
    
  ];
  
  mataraVanList:BikeInterface[]=[
  
    {bikeId:'mataravanb1',bikeName:'van',color:'red',condition:'good',quantity:1,img:'van2.jpg',rating:4,ratePerDay:200},
    {bikeId:'mataravanb2',bikeName:'van',color:'green',condition:'mint condition',quantity:1,img:'van4.jpg',rating:5,ratePerDay:500}  
    
  ];
  
  hikkaVanList:BikeInterface[]=[
  
    {bikeId:'hikkavanb1',bikeName:'van',color:'red',condition:'good',quantity:1,img:'van2.jpg',rating:4,ratePerDay:200},
    {bikeId:'hikkavanb2',bikeName:'van',color:'green',condition:'mint condition',quantity:1,img:'van3.jpg',rating:5,ratePerDay:500}  
    
  ];
  
  nuwaraVanList:BikeInterface[]=[
  
    {bikeId:'nuwaravanb1',bikeName:'van',color:'red',condition:'good',quantity:1,img:'van1.jpg',rating:4,ratePerDay:200},
    {bikeId:'nuwaravanb2',bikeName:'van',color:'green',condition:'mint condition',quantity:1,img:'van3.jpg',rating:5,ratePerDay:500}  
    
  ];
  
    constructor() { }
  
    getGalleVanList():BikeInterface[]{
      return this.galleVanList;
    }
  
    getJaffanaVanList():BikeInterface[]{
      return this.jaffanaVanList;
    }
  
    getMataraVanList():BikeInterface[]{
      return this.mataraVanList;
    }
  
    getHikkaVanList():BikeInterface[]{
      return this.hikkaVanList;
    }
  
    getNuwaraVanList():BikeInterface[]{
      return this.nuwaraVanList;
    }
}
