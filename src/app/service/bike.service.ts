import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

gallebikeList:BikeInterface[]=[

  {bikeId:'gallebikeb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'gallebikeb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

jaffanaBikeList:BikeInterface[]=[

  {bikeId:'jaffnabikeb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'jaffnabikeb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

mataraBikeList:BikeInterface[]=[

  {bikeId:'matarabikeb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'matarabikeb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

hikkaBikeList:BikeInterface[]=[

  {bikeId:'matarabikeb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'matarabikeb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

nuwaraBikeList:BikeInterface[]=[

  {bikeId:'nuwarabikeb1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'nuwarabikeb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

  constructor() { }

  getGalleBikeList():BikeInterface[]{
    return this.gallebikeList;
  }

  getJaffanaBikeList():BikeInterface[]{
    return this.jaffanaBikeList;
  }

  getMataraBikeList():BikeInterface[]{
    return this.mataraBikeList;
  }

  getHikkaBikeList():BikeInterface[]{
    return this.hikkaBikeList;
  }

  getNuwaraBikeList():BikeInterface[]{
    return this.nuwaraBikeList;
  }
}

