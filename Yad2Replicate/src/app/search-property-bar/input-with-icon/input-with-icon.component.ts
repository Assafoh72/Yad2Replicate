import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.scss']
})
export class InputWithIconComponent {
  @Input() isOpenArrowIcon = false; // decorate the property with @Input()

}
