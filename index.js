// ES6 Class "Car" with attributes "make", "model", and "year"
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method to get the description of the car
    getDescription() {
      return `Car: ${this.make} ${this.model} ${this.year}`;
    }
  }
  
  // Extended class "ElectricCar" of "Car" with additional attribute "range"
  class ElectricCar extends Car {
    constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
    }
  
    // Method to get the description of the electric car
    getDescription() {
      return `Electric Car: ${this.make} ${this.model} ${this.year}, Range: ${this.range} miles`;
    }
  }
  
  // Creating an instance of ElectricCar
  const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  
  // Outputting the type of the vehicle to the console
  console.log("Type of the vehicle:");
  console.log(myElectricCar instanceof ElectricCar ? "Electric Car" : "Car");
  
  // Outputting the description of the vehicle to the console
  console.log("Description of the vehicle:");
  console.log(myElectricCar.getDescription());
  