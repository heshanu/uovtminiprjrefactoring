import { Injectable, OnInit } from '@angular/core';
//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { FoodsInterface } from '../model/foodrecipe.model';

export interface FoodTypeIterface{
  id:string;
  foodName:string  ;
}

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService{

  private recipeLink='https://dummyjson.com/recipes?limit=10&select=name,image,ingredients';

  constructor(private http:HttpClient) {}

  getRecipes():Observable<any[]>{
    return this.http.get<any[]>(this.recipeLink);
  }

  foodTypes:FoodTypeIterface[]=[
    {id:"1",foodName:"southern"},
    {id:"2",foodName:"northern"},
    {id:"3",foodName:"chineese"},
    {id:"4",foodName:"japanees"},
    {id:"5",foodName:"traditional"}
  ]

  southernFoodList: FoodsInterface[] = [
  //   foodId:string;
  //  name:string;
  //  image:string;
  //  ingredients:string[];
    //  price:number;
    { foodId: "southfood1", name: "Brown rice with polsambola", image: 'https://www.hungrylankan.com/wp-content/uploads/2020/07/20200712_112107_compress37-768x1024.jpg.webp', ingredients: ["Rice", "Sambol"], price: 450 },
    { foodId: "southfood2", name: "Brown rice with polsambola", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/04/img_8257edited.jpg', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "southfood3", name: "Yellow Chicken Vinegar", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/11/img_1459.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 650 },
    { foodId: "southfood4", name: "Sri Lanka Ambarella Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/11/img_1437.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 650 },
    { foodId: "southfood5", name: "Winter Melon/Ash Guard Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/11/img_1278.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 650 },
    { foodId: "southfood6", name: "Long Bean curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/08/img_1032.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 600 },
    { foodId: "southfood7", name: "Drumstick Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/09/img_0318.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 650 },
    { foodId: "southfood8", name: "Devilled Mushroom", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/04/img_0510.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 650 },
  ]

  northernFoodList: FoodsInterface[] = [
    { foodId: "northfood1", name: "Breadfood Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/08/img_9828.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood2", name: "Chickpeas Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/06/rasakamakadala2.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood3", name: "Pork Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/06/pork-curry-recipe2.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood4", name: "Garlic Rice", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_6585-edited.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood5", name: "Hot Fish Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_7832-edited.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood6", name: "Pork Stew", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/03/img_60252.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 }
  ];

  chineeseFoodList: FoodsInterface[] = [
    { foodId: "northfood1", name: "Breadfood Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/08/img_9828.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood2", name: "Chickpeas Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/06/rasakamakadala2.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood3", name: "Pork Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/06/pork-curry-recipe2.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood4", name: "Garlic Rice", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_6585-edited.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood5", name: "Hot Fish Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_7832-edited.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "northfood6", name: "Pork Stew", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/03/img_60252.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 }
  ];

  traditionalList: FoodsInterface[] = [
    { foodId: "traiditionfood1", name: "Fried Banana Blossom", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_8640-edited.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "traiditionfood2", name: "Fish Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_8860-edited1.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "traiditionfood3", name: "Boilled Casava", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/05/img_7376-edited-wwwww.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "traiditionfood4", name: "Kurakkan Roti", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/04/editedimg_7360.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "traiditionfood5", name: "Milk Rice", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/04/edited-img_7104.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "traiditionfood6", name: "Gotukola Sambol", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/02/image_1-with-water-mark1.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
    { foodId: "traiditionfood7", name: "Ambarella Curry", image: 'https://rasakama.wordpress.com/wp-content/uploads/2016/11/img_1437.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 },
//    { foodId: "traiditionfood8", name: "Pork Stew", image: 'https://rasakama.wordpress.com/wp-content/uploads/2015/03/img_60252.jpg?w=450&h=450&crop=1', ingredients: ["Fish", "Sambol"], price: 450 }
  ];


  getFoodTypes():FoodTypeIterface[]{
    return this.foodTypes;
  }

  getSouthernFoods():any[]{
    return this.southernFoodList;
   // return this.http.get<any[]>(this.recipeLink+"&search?q=Indian")
  }

  //''
  getNorthernFoods(): FoodsInterface[]{
    return this.northernFoodList;
  //  return this.http.get<any[]>("https://dummyjson.com/recipes/tag/Pakistani?limit=10&select=name,image,ingredients")
  }

  getChineeseFoods(): any[] {
    return this.chineeseFoodList;
  }

  getJapaneeseFoods():Observable<any[]>{
    return this.http.get<any[]>("https://dummyjson.com/recipes/tag/Pakistani?limit=10&select=name,image,ingredients")
  }

  getTraditionalFoods():any[]{
    return this.traditionalList;
  }


}
