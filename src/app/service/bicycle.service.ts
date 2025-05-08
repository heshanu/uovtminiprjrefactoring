import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

 galleBicycleList:BikeInterface[]=[
 
   {bikeId:'gallebicycleb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
   {bikeId:'gallebicycle2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
   
 ];
 
 jaffanaBicycleList:BikeInterface[]=[
 
   {bikeId:'jaffnabicycleb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
   {bikeId:'jaffnabicycleb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
   
 ];
 
 mataraBicycleList:BikeInterface[]=[
 
   {bikeId:'matarabicycleb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
   {bikeId:'matarabicycleb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
   
 ];
 
 hikkaBicycleList:BikeInterface[]=[
 
   {bikeId:'hikkabicycleb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
   {bikeId:'hikkabicycleb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
   
 ];
 
 nuwaraBicycleList:BikeInterface[]=[
 
   {bikeId:'nuwarabicycleb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
   {bikeId:'nuwarabicycleb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
   
 ];
 
   constructor() { }
 
   getGalleBicycleList():BikeInterface[]{
     return this.galleBicycleList;
   }
 
   getJaffanaBicycleList():BikeInterface[]{
     return this.jaffanaBicycleList;
   }
 
   getMataraBicycleList():BikeInterface[]{
     return this.mataraBicycleList;
   }
 
   getHikkaBicycleList():BikeInterface[]{
     return this.hikkaBicycleList;
   }
 
   getNuwaraBicycleList():BikeInterface[]{
     return this.nuwaraBicycleList;
   }
}
