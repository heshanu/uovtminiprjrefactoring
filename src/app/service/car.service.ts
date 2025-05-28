import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {


galleCarList:BikeInterface[]=[

  {bikeId:'gallecarb1',bikeName:'vagon',color:'red',condition:'good',quantity:1,img:'car3.jpg',rating:4,ratePerDay:200},
  {bikeId:'gallecarb2',bikeName:'vagon',color:'green',condition:'mint condition',quantity:1,img:'car2.jpg',rating:5,ratePerDay:500}  
  
];

jaffanaCarList:BikeInterface[]=[

  {bikeId:'jaffnacarb1',bikeName:'vagon',color:'red',condition:'good',quantity:1,img:'car2.jpg',rating:4,ratePerDay:200},
  {bikeId:'jaffnacarb2',bikeName:'vagon',color:'green',condition:'mint condition',quantity:1,img:'car3.jpg',rating:5,ratePerDay:500}  
  
];

mataraCarList:BikeInterface[]=[

  {bikeId:'mataracarb1',bikeName:'vagon',color:'red',condition:'good',quantity:1,img:'car2.jpg',rating:4,ratePerDay:200},
  {bikeId:'mataracarb2',bikeName:'vagon',color:'green',condition:'mint condition',quantity:1,img:'car3.jpg',rating:5,ratePerDay:500}  
  
];

hikkaCarList:BikeInterface[]=[

  {bikeId:'hikkacarb1',bikeName:'vangan',color:'red',condition:'good',quantity:1,img:'car2.jpg',rating:4,ratePerDay:200},
  { bikeId: 'hikkacarb2', bikeName: 'vagan', color: 'green', condition: 'mint condition', quantity: 1, img: 'car2.jpg', rating: 5, ratePerDay: 500 },
  {bikeId:'hikkacarb3',bikeName:'supra',color:'red',condition:'good',quantity:1,img:'car3.jpg',rating:4,ratePerDay:200},
  {bikeId:'hikkacarb4',bikeName:'vagon',color:'green',condition:'mint condition',quantity:1,img:'car4.jpg',rating:5,ratePerDay:500}  
  
];

nuwaraCarList:BikeInterface[]=[

  {bikeId:'nuwaracarb1',bikeName:'vagan',color:'red',condition:'good',quantity:1,img:'car2.jpg',rating:4,ratePerDay:200},
  {bikeId:'nuwaracarb2',bikeName:'vagon',color:'green',condition:'mint condition',quantity:1,img:'car3.jpg',rating:5,ratePerDay:500}  
  
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
