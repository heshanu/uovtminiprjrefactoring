import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoent/header/header.component';
import { FooterComponent } from './compoent/footer/footer.component';
import { PosterComponent } from './shared/poster/poster.component';
import { BookatripPosterComponent } from './compoent/bookatrip-poster/bookatrip-poster.component';
import { CustomerDashBoardComponent } from './compoent/customer-dash-board/customer-dash-board.component';
import { CustomerdetailComponent } from './compoent/customerdetail/customerdetail.component';
import { CustomersDashBoardComponent } from './compoent/customers-dash-board/customers-dash-board.component';
import { HomepageComponent } from './compoent/homepage/homepage.component';
import { CentralprovinceComponent } from './compoent/hotelsList/centralprovince/centralprovince.component';
import { EasternprovinceComponent } from './compoent/hotelsList/easternprovince/easternprovince.component';
import { NorthCentralprovinceComponent } from './compoent/hotelsList/north-centralprovince/north-centralprovince.component';
import { NorthWesternprovinceComponent } from './compoent/hotelsList/north-westernprovince/north-westernprovince.component';
import { NorthprovinceComponent } from './compoent/hotelsList/northprovince/northprovince.component';
import { SabaragamuwaprovinceComponent } from './compoent/hotelsList/sabaragamuwaprovince/sabaragamuwaprovince.component';
import { SouthenrnprovinceComponent } from './compoent/hotelsList/southenrnprovince/southenrnprovince.component';
import { UvaprovinceComponent } from './compoent/hotelsList/uvaprovince/uvaprovince.component';
import { WesternproinceComponent } from './compoent/hotelsList/westernproince/westernproince.component';
import { MapSriLankaComponent } from './compoent/map-sri-lanka/map-sri-lanka.component';
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { SearchImagePosterComponent } from './compoent/search-image-poster/search-image-poster.component';
import { BicycleComponent } from './compoent/travelMode/bicycle/bicycle.component';
import { GallebicycleComponent } from './compoent/travelMode/bicycle/gallebicycle/gallebicycle.component';
import { HikabicycleComponent } from './compoent/travelMode/bicycle/hikabicycle/hikabicycle.component';
import { MatarabicycleComponent } from './compoent/travelMode/bicycle/matarabicycle/matarabicycle.component';
import { NuwarabicycleComponent } from './compoent/travelMode/bicycle/nuwarabicycle/nuwarabicycle.component';
import { CarComponent } from './compoent/travelMode/car/car.component';
import { GallecarComponent } from './compoent/travelMode/car/gallecar/gallecar.component';
import { HikkacarComponent } from './compoent/travelMode/car/hikkacar/hikkacar.component';
import { MataracarComponent } from './compoent/travelMode/car/mataracar/mataracar.component';
import { NuwaracarComponent } from './compoent/travelMode/car/nuwaracar/nuwaracar.component';
import { GallerentbikesComponent } from './compoent/travelMode/motorbike/gallerentbikes/gallerentbikes.component';
import { HikkarentbikesComponent } from './compoent/travelMode/motorbike/hikkarentbikes/hikkarentbikes.component';
import { MatararentbikesComponent } from './compoent/travelMode/motorbike/matararentbikes/matararentbikes.component';
import { MotorbikeComponent } from './compoent/travelMode/motorbike/motorbike.component';
import { NuwararentbikesComponent } from './compoent/travelMode/motorbike/nuwararentbikes/nuwararentbikes.component';
import { TrainComponent } from './compoent/travelMode/train/train.component';
import { GalletuktukComponent } from './compoent/travelMode/tuktuk/galletuktuk/galletuktuk.component';
import { HikkatuktukComponent } from './compoent/travelMode/tuktuk/hikkatuktuk/hikkatuktuk.component';
import { MataratuktukComponent } from './compoent/travelMode/tuktuk/mataratuktuk/mataratuktuk.component';
import { NunwaratuktukComponent } from './compoent/travelMode/tuktuk/nunwaratuktuk/nunwaratuktuk.component';
import { TuktukComponent } from './compoent/travelMode/tuktuk/tuktuk.component';
import { GallevanComponent } from './compoent/travelMode/van/gallevan/gallevan.component';
import { HikkavanComponent } from './compoent/travelMode/van/hikkavan/hikkavan.component';
import { MataravanComponent } from './compoent/travelMode/van/mataravan/mataravan.component';
import { NuwaravanComponent } from './compoent/travelMode/van/nuwaravan/nuwaravan.component';
import { VanComponent } from './compoent/travelMode/van/van.component';
import { BeveragelistComponent } from './module/beverage/beveragelist/beveragelist.component';
import { HotelistComponent } from './module/hotelsbooking/hotelist/hotelist.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AccordintemplateComponent } from './shared/accordintemplate/accordintemplate.component';
import { BeverageconfirmComponent } from './shared/beverageconfirm/beverageconfirm.component';
import { BeveragetemplateComponent } from './shared/beveragetemplate/beveragetemplate.component';
import { CalenderComponent } from './shared/calender/calender.component';
import { CardPosterComponent } from './shared/card-poster/card-poster.component';
import { CardtemplateComponent } from './shared/cardtemplate/cardtemplate.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { DialogCompoentComponent } from './shared/dialog-hotel/dialog-compoent.component';
import { DialogHotelconfirmComponent } from './shared/dialog-hotelconfirm/dialog-hotelconfirm.component';
import { DialogTrainComponent } from './shared/dialog-train/dialog-train.component';
import { DialogTrainconfirmComponent } from './shared/dialog-trainconfirm/dialog-trainconfirm.component';
import { HoteltemplateComponent } from './shared/hoteltemplate/hoteltemplate.component';
import { RecommendationComponent } from './shared/recommendation/recommendation.component';
import { SearchComponent } from './shared/search/search.component';
import { SearchresultComponent } from './shared/searchresult/searchresult.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SubsriberPosterComponent } from './shared/subsriber-poster/subsriber-poster.component';
import { VehicletemplateComponent } from './shared/vehicletemplate/vehicletemplate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './module/home/home.module';
import { LoginModule } from './module/login/login.module';
import { CommonModule } from '@angular/common';
import { BeverageModule } from './module/beverage/beverage.module';
import { store } from './store';
import { FoodModule } from './module/food/food.module';
import { MaterialModule } from './shared/materialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    HomepageComponent,
    HomepageComponent,
    MapSriLankaComponent,
    CardPosterComponent,
    BookatripPosterComponent,
    SubsriberPosterComponent,
    FooterComponent,
    HeaderComponent,
    CustomerdetailComponent,
    CalenderComponent,
    SearchImagePosterComponent,
   // CustomerDashBoardComponent,
   // CustomersDashBoardComponent,
    NotfoundComponent,
    RecommendationComponent,
   // MotorbikeComponent,
    GallerentbikesComponent,
    HikkarentbikesComponent,
    MatararentbikesComponent,
    NuwararentbikesComponent,
    VehicletemplateComponent,
    HotelistComponent,
    HoteltemplateComponent,
    //AccordintemplateComponent,
    SouthenrnprovinceComponent,
    DialogCompoentComponent,
    CardtemplateComponent,
    DialogHotelconfirmComponent,
    WesternproinceComponent,
    CentralprovinceComponent,
    NorthWesternprovinceComponent,
    SabaragamuwaprovinceComponent,
    NorthprovinceComponent,
    EasternprovinceComponent,
    UvaprovinceComponent,
    NorthCentralprovinceComponent,
   // OrderdetailsComponent,
   // BicycleComponent,
    GallebicycleComponent,
    HikabicycleComponent,
    MatarabicycleComponent,
    NuwarabicycleComponent,
    //CarComponent,
    GallecarComponent,
    HikkacarComponent,
    MataracarComponent,
    NuwaracarComponent,
   // VanComponent,
    GallevanComponent,
    HikkavanComponent,
    MataravanComponent,
    NuwaravanComponent,
   // TuktukComponent,
    GalletuktukComponent,
    HikkatuktukComponent,
    MataratuktukComponent,
    NunwaratuktukComponent,
    TrainComponent,
    DialogTrainComponent,
    DialogTrainconfirmComponent,
    BeveragelistComponent,
   // BeveragetemplateComponent,
    SpinnerComponent,
    BeverageconfirmComponent,
    ConfirmationModalComponent,
    SearchComponent,
    SearchresultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule,
        LoginModule,
        BeverageModule,
        FoodModule,
        MaterialModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
