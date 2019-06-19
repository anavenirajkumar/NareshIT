class Car {
    constructor(color,fuel,rpm,mfg){
        this.color = color;
        this.fuel = fuel;
        this.rpm = rpm;
        this.mfg = mfg;
    }

    specification(){
        let spec = `Color : ${this.color}
                    Fuel : ${this.fuel}
                    RPM : ${this.rpm}
                    MFG : ${this.mfg}`;
        return spec;
    }
}

let car1 = new Car('white','diesel',5000,2019);
console.log(car1.specification());

