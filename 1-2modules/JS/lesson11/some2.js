class Car {
    constructor (f,consumption) {
        this.fuel = f
        this.consumption = (consumption/100)
        console.log('Машина создана. Бак заправлен на ' + this.fuel)
        }
        reFuel (q) {
        let diff = (this.fuel + q) - 100
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        return (this.fuel + q) > 100 ? diff : 0
        }
        go (distance) {
            let rashod = (this.fuel)-(this.consumption)*distance //q*(0.13)

            rashod<0 ? this.fuel = 0 : this.fuel = (this.fuel) - rashod
            console.log('Расход составил:' + rashod)
            console.log('Текущий размер топлива:' + this.fuel)
            return rashod
        }
        getFuelLevel () {
            return this.fuel
        }


        

    }

// let mercedesBenz = new Car(71,15)
