import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {



  searchForm = new FormGroup({
    area: new FormControl("",[Validators.required]),
    assetType: new FormControl("",[Validators.required]),
    numOfRoom: new FormControl("",Validators.required),
    fromPrice: new FormControl("",[]),
    toPrice: new FormControl("",[]),
  })

  handelSubmit(): void{
    console.log("search sent");
  }

  IsDropdown: boolean = false;
  updateIsDropdown(){
    this.IsDropdown=!this.IsDropdown
    console.log("IsDropdown" +  this.IsDropdown);
  }
  priceLable : string = "מחיר";
  




  // selectAll = false;

  // categories = [
  //   {
  //     name: 'Category 1',
  //     selected: false,
  //     subCategories: [
  //       { name: 'Subcategory 1', selected: false },
  //       { name: 'Subcategory 2', selected: false },
  //       { name: 'Subcategory 3', selected: false },
  //       { name: 'Subcategory 4', selected: false }
  //     ]
  //   },
  //   // Add more categories as needed
  // ];

  // onSelectAllChange() {
  //   for (const category of this.categories) {
  //     category.selected = this.selectAll;
  //     for (const subCategory of category.subCategories) {
  //       subCategory.selected = this.selectAll;
  //     }
  //   }
  // }

  // onCategoryChange(index: number) {
  //   const category = this.categories[index];
  //   for (let i = index + 1; i < this.categories.length; i++) {
  //     this.categories[i].selected = category.selected;
  //     for (const subCategory of this.categories[i].subCategories) {
  //       subCategory.selected = category.selected;
  //     }
  //   }
  // }









}
