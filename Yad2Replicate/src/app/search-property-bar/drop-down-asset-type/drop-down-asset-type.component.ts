import { Component } from '@angular/core';


export interface AssetsCheckbox {
  name: string;
  completed: boolean;

  subtasks?: AssetsCheckbox[];
}



@Component({
  selector: 'app-drop-down-asset-type',
  templateUrl: './drop-down-asset-type.component.html',
  styleUrls: ['./drop-down-asset-type.component.scss']
})
export class DropDownAssetTypeComponent {








  @Component({
    selector: 'app-drop-down-property-types',
    templateUrl: './drop-down-property-types.component.html',
    styleUrls: ['./drop-down-property-types.component.scss']
  })

    appartment: AssetsCheckbox = {
      name: 'דירות',
      completed: false,

      subtasks: [
        {name: 'דירה', completed: false},
          {name: 'דירת גן', completed: false},
          {name: 'גג\פנטהאוז', completed: false},
          {name: 'דופלקס', completed: false},
          {name: 'תיירות ונופש', completed: false},
          {name: 'מרתף\פרטנר', completed: false},
          {name: 'טריפלקס', completed: false},
          {name: 'יחידת דיור', completed: false},
          {name: 'סטודיו\לופט', completed: false},
      ],
    };

    home: AssetsCheckbox = {
      name: 'בתים',
      completed: false,
      subtasks: [
        {name: 'בית פרטי\קוטג', completed: false},
        {name: 'דו משפחתי', completed: false},
        {name: 'משק חקלאי\נחלה', completed: false},
        {name: 'משק עזר', completed: false},
      ],
    };

    other: AssetsCheckbox = {
      name: 'סוגים נוספים',
      completed: false,
      subtasks: [
        {name: 'מגרשים', completed: false},
        {name: 'דיור מוגן', completed: false},
        {name: 'בניין מגורים', completed: false},
        {name: 'מחסן', completed: false},
        {name: 'חניה', completed: false},
        {name: 'קבוצת רכישה\זכאות לנכס', completed: false},
        {name: 'כללי', completed: false},
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

