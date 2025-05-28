import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

gallebikeList:BikeInterface[]=[

  {bikeId:'gallebikeb1',bikeName:'Pulsar 150',color:'red',condition:'good',quantity:1,img:'pulsar150.jpg',rating:4,ratePerDay:200},
  { bikeId: 'gallebikeb2', bikeName: 'Honda Navi', color: 'green', condition: 'mint condition', quantity: 1, img: 'navi.jpg', rating: 5, ratePerDay: 500 },
  {bikeId:'gallebikeb3',bikeName:'Pulsar 160',color:'red',condition:'good',quantity:1,img:'pulsar150.jpg',rating:4,ratePerDay:200},
  {bikeId:'gallebikeb2',bikeName:'Honda Navi v1',color:'green',condition:'mint condition',quantity:1,img:'navi.jpg',rating:5,ratePerDay:500}  
  
];

jaffanaBikeList:BikeInterface[]=[

  {bikeId:'jaffnabikeb1',bikeName:'Honda Navi',color:'red',condition:'good',quantity:1,img:'navi.jpg',rating:4,ratePerDay:200},
  {bikeId:'jaffnabikeb2',bikeName:'Pulsar 150',color:'green',condition:'mint condition',quantity:1,img:'pulsar150.jpg',rating:5,ratePerDay:500}  
  
];

mataraBikeList:BikeInterface[]=[

  {bikeId:'matarabikeb1',bikeName:'lumala',color:'red',condition:'good',quantity:1,img:'',rating:4,ratePerDay:200},
  {bikeId:'matarabikeb2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:1,img:'',rating:5,ratePerDay:500}  
  
];

hikkaBikeList:BikeInterface[]=[

  {bikeId:'hikkabikeb1',bikeName:'pulsar150',color:'red',condition:'good',quantity:1,img:'pulsar150.jpg',rating:4,ratePerDay:200},
  { bikeId: 'hikkabikeb2', bikeName: 'pleasurebike', color: 'green', condition: 'mint condition', quantity: 1, img: 'pleasurebike.jpg', rating: 5, ratePerDay: 500 },
  {bikeId:'hikkabikeb3',bikeName:'FZ',color:'red',condition:'good',quantity:1,img:'fx.jpg',rating:4,ratePerDay:200},
  {bikeId:'hikkabikeb4',bikeName:'Pleasure',color:'green',condition:'mint condition',quantity:1,img:'pleasurebike.jpg',rating:5,ratePerDay:500}  
  
];

nuwaraBikeList:BikeInterface[]=[

  {bikeId:'nuwarabikeb1',bikeName:'FZ',color:'red',condition:'good',quantity:1,img:'fx.jpg',rating:4,ratePerDay:200},
  {bikeId:'nuwarabikeb2',bikeName:'Pleasure',color:'green',condition:'mint condition',quantity:1,img:'pleasurebike.jpg',rating:5,ratePerDay:500}  
  
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

