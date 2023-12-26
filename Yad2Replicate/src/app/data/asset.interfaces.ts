 export interface Asset{
        Id: number;
        type:string;
        price: number;
        street:string;
        streetNumber: number;
        neighborhood:string;
        city: string;
        floor:number;
        roomsNumber:number;
        totalSquareFootage:number;
        des: string;
        hasMamad: boolean;

        propertyCondition: string;
        entryDate: string;
        gardenSquare: number;
        builtSquare: number;
        floorInTheBuilding: number; // יש כפילות
        parkingLots: number;
        terrace: number;

        hasAirConditioning: boolean;
        hasSolarHeater: boolean;
        hasStorage: boolean;
        isFlexible: boolean;
        hasWindowBars: boolean;
        hasAccessibilityForDisabled: boolean;
        hasCentralAirConditioning: boolean;
        hasElevator: boolean;
        renovated: boolean;
        hasFurniture: boolean;
        hasKosherKitchen: boolean;
        rearAsset: boolean;

 }

