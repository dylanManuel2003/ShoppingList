import { Injectable } from '@angular/core';
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 1,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 2,
      title: 'naranja',
      price: 8.6,
      quantity: 3,
      completed: false
    },
    {
      id: 3,
      title: 'pera',
      price: 6.5,
      quantity: 7,
      completed: false
    },
    {
      id: 4,
      title: 'kiwi',
      price: 12.4,
      quantity: 5,
      completed: false
    },
  ];


  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
