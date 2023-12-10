import { Component } from '@angular/core';

import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface AssetsCheckbox {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: AssetsCheckbox[];
}


@Component({
  selector: 'app-drop-down-property-types',
  templateUrl: './drop-down-property-types.component.html',
  styleUrls: ['./drop-down-property-types.component.scss']
})
export class DropDownPropertyTypesComponent {

  appartment: AssetsCheckbox = {
    name: 'דירות',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'דירה', completed: false, color: 'primary'},
        {name: 'דירת גן', completed: false, color: 'accent'},
        {name: 'גג\פנטהאוז', completed: false, color: 'warn'},
        {name: 'דופלקס', completed: false, color: 'primary'},
        {name: 'תיירות ונופש', completed: false, color: 'accent'},
        {name: 'מרתף\פרטנר', completed: false, color: 'warn'},
        {name: 'טריפלקס', completed: false, color: 'primary'},
        {name: 'יחידת דיור', completed: false, color: 'accent'},
        {name: 'סטודיו\לופט', completed: false, color: 'warn'},
    ],
  };

  home: AssetsCheckbox = {
    name: 'בתים',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'בית פרטי\קוטג', completed: false, color: 'primary'},
      {name: 'דו משפחתי', completed: false, color: 'accent'},
      {name: 'משק חקלאי\נחלה', completed: false, color: 'primary'},
      {name: 'משק עזר', completed: false, color: 'accent'},
    ],
  };

  other: AssetsCheckbox = {
    name: 'סוגים נוספים',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'מגרשים', completed: false, color: 'primary'},
      {name: 'דיור מוגן', completed: false, color: 'accent'},
      {name: 'בניין מגורים', completed: false, color: 'warn'},
      {name: 'מחסן', completed: false, color: 'primary'},
      {name: 'חניה', completed: false, color: 'accent'},
      {name: 'קבוצת רכישה\זכאות לנכס', completed: false, color: 'warn'},
      {name: 'כללי', completed: false, color: 'primary'},
    ],
  };

  allAppartmentComplete: boolean = false;
  allHomeComplete: boolean = false;
  allOtherComplete: boolean = false;
//all

updateAllComplete() {
  console.log("updateAllComplete()");
  this.updateAllAppartmentComplete();
  console.log("beforHome");

  this.updateAllHomeComplete()
  this.updateAllOtherComplete()
}

someComplete(): boolean {
  if(this.someAppartmentComplete()||
  this.someHomeComplete()||
  this.someOtherComplete()){
    return true;
  }
  else{
    return false;
  }
}

setAll(completed: boolean) {
  console.log("setAll()");
  this.setAllAppartment(completed)
  console.log("beforHome");

  this.setAllHome(completed)
  this.setAllOther(completed);

}


//appartment
  updateAllAppartmentComplete() {
    this.allAppartmentComplete = this.appartment.subtasks != null && this.appartment.subtasks.every(t => t.completed);
  }

  someAppartmentComplete(): boolean {
    if (this.appartment.subtasks == null) {
      return false;
    }
    return this.appartment.subtasks.filter(t => t.completed).length > 0 && !this.allAppartmentComplete;
  }

  setAllAppartment(completed: boolean) {
    this.allAppartmentComplete = completed;
    if (this.appartment.subtasks == null) {
      return;
    }
    this.appartment.subtasks.forEach(t => (t.completed = completed));
  }

  //home

  updateAllHomeComplete() {
    this.allHomeComplete = this.home.subtasks != null && this.home.subtasks.every(t => t.completed);
  }

  someHomeComplete(): boolean {
    if (this.home.subtasks == null) {
      return false;
    }
    return this.home.subtasks.filter(t => t.completed).length > 0 && !this.allHomeComplete;
  }

  setAllHome(completed: boolean) {
    this.allHomeComplete = completed;
    if (this.home.subtasks == null) {
      return;
    }
    this.home.subtasks.forEach(t => (t.completed = completed));
  }

  //other


  updateAllOtherComplete() {
    this.allOtherComplete = this.other.subtasks != null && this.other.subtasks.every(t => t.completed);
  }

  someOtherComplete(): boolean {
    if (this.other.subtasks == null) {
      return false;
    }
    return this.other.subtasks.filter(t => t.completed).length > 0 && !this.allOtherComplete;
  }

  setAllOther(completed: boolean) {
    this.allOtherComplete = completed;
    if (this.other.subtasks == null) {
      return;
    }
    this.other.subtasks.forEach(t => (t.completed = completed));
  }



}








// import { Component } from '@angular/core';

// import {ThemePalette} from '@angular/material/core';
// import {FormsModule} from '@angular/forms';
// import {MatCheckboxModule} from '@angular/material/checkbox';

// export interface Task {
//   name: string;
//   completed: boolean;
//   color: ThemePalette;
//   subtasks?: Task[];
// }


// @Component({
//   selector: 'app-drop-down-property-types',
//   templateUrl: './drop-down-property-types.component.html',
//   styleUrls: ['./drop-down-property-types.component.scss']
// })
// export class DropDownPropertyTypesComponent {


//   tasks: Task[] = [
//     {
//       name: 'דירות',
//       completed: false,
//       color: 'primary',
//       subtasks: [
//         {name: 'דירה', completed: false, color: 'primary'},
//         {name: 'דירת גן', completed: false, color: 'accent'},
//         {name: 'גג\פנטהאוז', completed: false, color: 'warn'},
//         {name: 'דופלקס', completed: false, color: 'primary'},
//         {name: 'תיירות ונופש', completed: false, color: 'accent'},
//         {name: 'מרתף\פרטנר', completed: false, color: 'warn'},
//         {name: 'טריפלקס', completed: false, color: 'primary'},
//         {name: 'יחידת דיור', completed: false, color: 'accent'},
//         {name: 'סטודיו\לופט', completed: false, color: 'warn'},
//       ],
//     },
//     {
//       name: 'בתים',
//       completed: false,
//       color: 'primary',
//       subtasks: [
//         {name: 'בית פרטי\קוטג', completed: false, color: 'primary'},
//         {name: 'דו משפחתי', completed: false, color: 'accent'},
//         {name: 'משק חקלאי\נחלה', completed: false, color: 'primary'},
//         {name: 'משק עזר', completed: false, color: 'accent'},
//       ],
//     },
//     {
//       name: 'סוגים נוספים',
//       completed: false,
//       color: 'primary',
//       subtasks: [
//         {name: 'מגרשים', completed: false, color: 'primary'},
//         {name: 'דיור מוגן', completed: false, color: 'accent'},
//         {name: 'בניין מגורים', completed: false, color: 'warn'},
//         {name: 'מחסן', completed: false, color: 'primary'},
//         {name: 'חניה', completed: false, color: 'accent'},
//         {name: 'קבוצת רכישה\זכאות לנכס', completed: false, color: 'warn'},
//         {name: 'כללי', completed: false, color: 'primary'},

//       ],
//     },
//     // Add more categories as needed
//   ];

//   appartment: Task =
//     {
//       name: 'דירות',
//       completed: false,
//       color: 'primary',
//       subtasks: [
//         {name: 'דירה', completed: false, color: 'primary'},
//         {name: 'דירת גן', completed: false, color: 'accent'},
//         {name: 'גג\פנטהאוז', completed: false, color: 'warn'},
//         {name: 'דופלקס', completed: false, color: 'primary'},
//         {name: 'תיירות ונופש', completed: false, color: 'accent'},
//         {name: 'מרתף\פרטנר', completed: false, color: 'warn'},
//         {name: 'טריפלקס', completed: false, color: 'primary'},
//         {name: 'יחידת דיור', completed: false, color: 'accent'},
//         {name: 'סטודיו\לופט', completed: false, color: 'warn'},
//       ],
//     }

//   allComplete: boolean = false;
//   allAppartmentComplete: boolean = false
//   allHomeComlete: boolean = false;


//   // updateAllComplete() {
//   //   this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
//   // }

//   // someComplete(): boolean {
//   //   if (this.task.subtasks == null) {
//   //     return false;
//   //   }
//   //   return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
//   // }

//   // setAll(completed: boolean) {
//   //   this.allComplete = completed;
//   //   if (this.task.subtasks == null) {
//   //     return;
//   //   }
//   //   this.task.subtasks.forEach(t => (t.completed = completed));
//   // }

//   updateAllComplete() {
//     this.allComplete = this.tasks.every(category => category.subtasks != null && category.subtasks.every(t => t.completed));
//   }

//   someComplete(): boolean {
//     return this.tasks.some(category =>
//       category.subtasks != null && category.subtasks.filter(t => t.completed).length > 0 && !category.completed
//     );
//   }


//   setAll(completed: boolean) {
//     this.allComplete = completed;
//     this.tasks.forEach(category => {
//       if (category.subtasks != null) {
//         category.subtasks.forEach(t => (t.completed = completed));
//       }
//     });
//   }



//   updateAllAppartmentComplete() {
//     this.allAppartmentComplete = this.appartment.every(category => category.subtasks != null && category.subtasks.every(t => t.completed));
//   }

//   someAppartmentComplete(): boolean {
//     return this.appartment.some(category =>
//       category.subtasks != null && category.subtasks.filter(t => t.completed).length > 0 && !category.completed
//     );
//   }


//   setAllAppartment(completed: boolean) {
//     this.allAppartmentComplete = completed;
//     this.appartment.forEach(category => {
//       if (category.subtasks != null) {
//         category.subtasks.forEach(t => (t.completed = completed));
//       }
//     });
//   }


// }
