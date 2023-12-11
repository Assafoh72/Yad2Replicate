import { Component } from '@angular/core';


@Component({
  selector: 'app-addvence-search-button',
  templateUrl: './addvence-search-button.component.html',
  styleUrls: ['./addvence-search-button.component.scss']
})
export class AddvenceSearchButtonComponent {
  isAdvancedSearchOpen: boolean = false
  updateOpenAdvenceSearch(){
    this.isAdvancedSearchOpen = !this.isAdvancedSearchOpen;

  }
}
