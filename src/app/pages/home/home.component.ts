import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Item} from '../../models/item.model'
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

const ROW_HEIGHT: { [id:number]: number } = {
  1: 400, 
  3: 335, 
  4: 350
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit, OnDestroy {
  showFiller = false;

  cols = 3
  rowHeight = ROW_HEIGHT[this.cols] 
  category: string | undefined;
  items: Array<Item> | undefined = [{
    id:1, 
    title:"Art1",
    price: 4500,
    category: "oil painting",
    description: "this is an oil painting",
    image: 'https://via.placeholder.com/150'
  }] 
  sort = 'desc'
  count = '12'
  itemsSubscription : Subscription | undefined;

  constructor(private storeService: StoreService){}


  @Input() item: Item | undefined = {
    id:1, 
    title:"Art1",
    price: 4500,
    category: "oil painting",
    description: "this is an oil painting",
    image: 'https://via.placeholder.com/150'
  }

  ngOnInit():void {
    // this.getItems()
  }

  getItems():void{
   this.itemsSubscription = this.storeService.getAllItems()
    .subscribe((_items) => {
      this.items = _items
    })
  }

  onColumnsCountChange(colsNum:number):void{
    this.cols = colsNum
    this.rowHeight = ROW_HEIGHT[this.cols]

  }
  onShowCategory(newCategory:string):void{
    this.category = newCategory;
    console.log("dd")
  }
  ngOnDestroy(): void {
    if(this.itemsSubscription){
    this.itemsSubscription.unsubscribe()
    }
  }
}
