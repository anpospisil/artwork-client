import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {
  showFiller = false;

  cols = 3

  onColumnsCountChange(colsNum:number):void{
    this.cols = colsNum
  }
}
