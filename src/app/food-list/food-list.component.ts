import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodItem1 = {
    name: 'Chicken Dum Biriyani',
    descr: 'Hyderabadi Dum style  delicious chicken biriyani',
    pricing: {
      price: 170,
      discountPercentage: 10,
    },
    addOns: {
      item1: { name: 'pepsi 100ml', addForPrice: 20, savings: 10 },
      item2: { name: 'Chicken Kabab 3 pieces', addForPrice: 30, savings: 40 },
    },
  };

  constructor() {}

  ngOnInit() {}
}
