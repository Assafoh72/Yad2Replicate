import { Injectable } from '@angular/core';
import { Asset } from '../data/asset.interfaces';

@Injectable({
  providedIn: 'root'
})

export class AssetService {

  constructor() { }
  private allAsset:Asset[] = [
    {
      Id: 1, // Random number
      type:"דירה",
    price: 500000, // Random number
    street: 'שושנים', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'הערמונים', // Random string
    city: 'תל-אביב', // Random string
    floor: 3, // Random number
    roomsNumber: 4,
    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'משופץ', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,

    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    },
    {
      Id: 2, // Random number
      type:"בית פרטי",
    price: 1200000, // Random number
    street: 'פרחים', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'ראשונים', // Random string
    city: 'נתניה', // Random string
    floor: 3, // Random number
    roomsNumber: 5,

    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'חדש מקבלן', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,


    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    },
    {
      Id: 3, // Random number
      type:"דירת גן",
    price: 1200000, // Random number
    street: 'פרחים', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'רמת בית הכרם', // Random string
    city: 'באר שבע', // Random string
    floor: 3, // Random number
    roomsNumber: 5,

    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'חדש מקבלן', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,


    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    },
    {
      Id: 4, // Random number
      type:"בית פרטי",
    price: 1200000, // Random number
    street: 'הגוש הגדול', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'רמת אביב ג', // Random string
    city: 'נתניה', // Random string
    floor: 3, // Random number
    roomsNumber: 5,

    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'חדש מקבלן', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,


    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    },
    {
      Id: 5, // Random number
      type:"דירה",
    price: 1200000, // Random number
    street: 'פרחים', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'ראשונים', // Random string
    city: 'נתניה', // Random string
    floor: 3, // Random number
    roomsNumber: 5,

    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'חדש מקבלן', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,


    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    },
    {
      Id: 6, // Random number
      type:"פנטהוז",
    price: 1200000, // Random number
    street: 'פרחים ושושנים', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'צהלה ג', // Random string
    city: 'קרית אתא', // Random string
    floor: 3, // Random number
    roomsNumber: 5,

    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'חדש מקבלן', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,


    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    },
    {
      Id: 7, // Random number
      type:"בית פרטי",
    price: 1200000, // Random number
    street: 'פרחים', // Random string
    streetNumber: 45, // Random number
    neighborhood: 'ראשונים', // Random string
    city: 'נתניה', // Random string
    floor: 3, // Random number
    roomsNumber: 5,

    totalSquareFootage: 1200, // Random number
    des: 'דירה במצב חדש ברחוב הכי שקט בחולון, הבניין עבר שיפוץ לאחרונה , סלון ענק! , 6 דיירים בלבד . בכל קומה 2 דירות , חניה מוצלת . כל הקודם זוכה', // Random string
    hasMamad: true, // Random boolean

    propertyCondition: 'חדש מקבלן', // Random string
    entryDate: '2022-07-15', // Random date (as string)
    gardenSquare: 500, // Random number
    builtSquare: 950, // Random number
    floorInTheBuilding: 5, // Random number
    parkingLots: 2, // Random number
    terrace: 2,


    hasAirConditioning: true, // Random boolean
    hasSolarHeater: false, // Random boolean
    hasStorage: true, // Random boolean
    isFlexible: false, // Random boolean
    hasWindowBars: true, // Random boolean
    hasAccessibilityForDisabled: false, // Random boolean
    hasCentralAirConditioning: true, // Random boolean
    hasElevator: false, // Random boolean
    renovated: true, // Random boolean
    hasFurniture: true, // Random boolean
    hasKosherKitchen: false, // Random boolean
    rearAsset: true // Random boolean
    }


  ]
  public getAsset():Asset[] {
    return this.allAsset;
  }

}
