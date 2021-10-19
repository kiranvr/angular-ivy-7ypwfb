import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

@Input() foodItem:any;

  constructor() { }

  ngOnInit() {
  }

}