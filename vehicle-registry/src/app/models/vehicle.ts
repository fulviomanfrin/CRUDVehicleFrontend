export class Vehicle{

    constructor( )
    {
     
    }

    model: string = "";
    public makeId: number = 0;
    public makeName: string = "";
    public doorQty: number = 0;
    public transmissionType: ETransmission = 0;
    public year: number = 0;
    public fuelType: EFuel = 0;
    public id?: number | null

    getFuel(fuelType: EFuel) {
        const FuelType: { [key in EFuel]: string } = {
          [EFuel.Flex]: "FLEX",
          [EFuel.Gasoline]: "GASOLINE",
          [EFuel.Etanol]: "ETANOL",
        }
        
        return FuelType[fuelType]
      }

    getTransmission(transmissionType: ETransmission) {
    const TransmissionType: { [key in ETransmission]: string } = {
        [ETransmission.amt]: "AMT",
        [ETransmission.auto]: "AUTO",
        [ETransmission.manual]: "MANUAL",
    }
    
    return TransmissionType[transmissionType]
    }
}

export enum ETransmission {
    manual = 0,
    amt = 1,
    auto = 2

}

export enum EFuel{
    Flex = 0,
    Gasoline =1,
    Etanol = 2
}



    