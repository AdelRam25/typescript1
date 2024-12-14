interface Vehicule {
    company : string
    model : string
    year : number
    start() : void 
}
const Car: Vehicule = {
    company : "BMW ",
    model : "M5",
    year : 2015,
    start: () => {
        return console.log('Engine started')
    }

}

Car.start()
