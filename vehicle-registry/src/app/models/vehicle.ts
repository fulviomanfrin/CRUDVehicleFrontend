export class Vehicle{

    constructor(

        


    )
    {
     


    }

    model: string = "";
    public makeId: number = 0;
    public doorQty: number = 0;
    public transmissionType: ETransmission = 0;
    public year: number = 0;
    public fuelType: EFuel = 0;
    public id?: number | null

}

enum ETransmission {
    manual = 0,
    amt = 1,
    auto = 2
}

enum EFuel{
    Flex = 0,
    Gasoline =1,
    Etanol = 2
}