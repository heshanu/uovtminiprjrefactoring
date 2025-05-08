import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {


galleCarList:BikeInterface[]=[

  {bikeId:'gallecarb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'gallecarb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

jaffanaCarList:BikeInterface[]=[

  {bikeId:'jaffnacarb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'jaffnacarb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

mataraCarList:BikeInterface[]=[

  {bikeId:'mataracarb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'mataracarb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

hikkaCarList:BikeInterface[]=[

  {bikeId:'hikkacarb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'hikkacarb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

nuwaraCarList:BikeInterface[]=[

  {bikeId:'nuwaracarb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'nuwaracarb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

  constructor() { }

  getGalleCarList():BikeInterface[]{
    return this.galleCarList;
  }

  getJaffanaCarList():BikeInterface[]{
    return this.jaffanaCarList;
  }

  getMataraCarList():BikeInterface[]{
    return this.mataraCarList;
  }

  getHikkaCarList():BikeInterface[]{
    return this.hikkaCarList;
  }

  getNuwaraCarList():BikeInterface[]{
    return this.nuwaraCarList;
  }
}
