import { Component } from '@angular/core';

@Component({
  selector: 'app-input-rooms-number',
  templateUrl: './input-rooms-number.component.html',
  styleUrls: ['./input-rooms-number.component.scss']
})
export class InputRoomsNumberComponent {

  isFirstDropDownOpen: boolean = false;
  updateIsDropDownOpen(){
    this.isFirstDropDownOpen = !this.isFirstDropDownOpen;
  }

  isFromDropDownOpen: boolean = false;
  updateIsFromDownOpen(){
    this.isFromDropDownOpen = !this.isFromDropDownOpen;
    this.isToDropDownOpen = false;
  }

  isToDropDownOpen: boolean = false;
  updateIsToDropDownOpen(){
    this.isToDropDownOpen = !this.isToDropDownOpen;
    this.isFromDropDownOpen = false;
  }

  // optionsFrom = Array.from({ length: 20 }, (_, index) => `Option ${index + 1}`);
  // optionsTo = Array.from({ length: 20 }, (_, index) => `Option ${index + 1}`);
  optionsFrom = [1,1.5,2,2.5,3,3.5,4,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12];
  optionsTo = [1,1.5,2,2.5,3,3.5,4,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12];
  fromValue: number=0;
  toValue: number=0;
  // newArray: number = []

  updateFromValue(selectedValue: number): void {
    this.fromValue = selectedValue;

    // You can adjust the logic here based on your requirements.
    // For example, you might want to set the 'toValue' to the selected value or do other computations.
    // this.toValue = selectedValue;
    // Find the index of the starting number
    const startIndex = this.optionsFrom.indexOf(selectedValue);

    // If the starting number is found in the array, create a new array from that index
    this.optionsTo = startIndex !== -1 ? this.optionsFrom.slice(startIndex) : [];

  }

  updateToValue(selectedValue: number): void{
    this.toValue = selectedValue;

    }


}
