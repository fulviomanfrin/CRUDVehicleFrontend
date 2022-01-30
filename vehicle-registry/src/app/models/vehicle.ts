

export class Vehicle{

    

    constructor(

        public id: number,
        public model: string,
        public makeId: number,
        public doorQty: number,
        public transmissionType: number,
        public year: number,
        public fuelType: number

    )
    {
        enum transmission {
            manual = 0,
            amt = 1,
            auto = 2
        }

        enum fuel{
        
        Flex,
        
        Gasoline,
        
        Etanol
        }

    }

   

}
