import { Component, Input } from '@angular/core';
import {Item} from "../../../models/item.model"

@Component({
  selector: 'app-item-box',
  templateUrl: `./item-box.component.html`,
})
export class ItemBoxComponent {
@Input() item: Item | undefined;
@Input() fullWidthMode = false

}
