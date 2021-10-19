import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-item/food-item.component';
// import { PriceComponent } from './price/price.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,FoodListComponent,FoodItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
