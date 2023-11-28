import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cards-header',
  templateUrl: 'cards-header.component.html',
  styles: [
  ]
})
export class CardsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>()
 sort = 'desc';
 itemsShowCount = 12;

  onSortUpdate(newSort: string):void{
this.sort = newSort
  }
  onItemsUpdate(count: number):void{
    this.itemsShowCount = count
      }
      onColumnsUpdate(colsNum: number):void{
        this.columnsCountChange.emit(colsNum)
          }
}
