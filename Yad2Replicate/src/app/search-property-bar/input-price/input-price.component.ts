import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss']
})
export class InputPriceComponent {
  @Input() lableInput: string = "";
}
