import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: `./item-box.component.html`,
})
export class ItemBoxComponent {

@Input() fullWidthMode = false
}
