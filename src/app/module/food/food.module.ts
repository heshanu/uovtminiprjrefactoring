import { NgModule } from '@angular/core';
import { FoodRoutingModule } from './food-routing.module';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MaterialModule } from '../../shared/materialModule';
import { FoodtemplateComponent } from '../../shared/foodtemplate/foodtemplate.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { SouthernComponent } from './foodStyle/southern/southern.component';
import { NorthernComponent } from './foodStyle/northern/northern.component';
import { ChineeseComponent } from './foodStyle/chineese/chineese.component';
import { JapaneeseComponent } from './foodStyle/japaneese/japaneese.component';
import { TraditionalComponent } from './foodStyle/traditional/traditional.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CardTemplateFoodsComponent } from '../../shared/card-template-foods/card-template-foods.component';
import { CommonModule } from '@angular/common';
import { SharedcompoentModule } from "../sharedcompoent/sharedcompoent.module";

@NgModule({
  declarations: [
    FoodlistComponent,
    FoodCategoryComponent,
    SouthernComponent,
    NorthernComponent,
    ChineeseComponent,
    JapaneeseComponent,
    TraditionalComponent,
    FoodtemplateComponent,
    CardTemplateFoodsComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    MaterialModule,
    CdkAccordionModule,
    MaterialModule,
    SharedcompoentModule
],
  exports:[
  ]
})
export class FoodModule { }
