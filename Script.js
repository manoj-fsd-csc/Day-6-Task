// 3.“person” class to hold all the details.
  class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Getter methods
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getEmail() {
    return this.email;
  }

  // Setter methods
  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setEmail(email) {
    this.email = email;
  }
}

// Ex:-
const person1 = new Person("John Doe", 30, "john@example.com");

console.log("Name: " + person1.getName());
console.log("Age: " + person1.getAge());
console.log("Email: " + person1.getEmail());

// Updating details
person1.setName("Jane Doe");
person1.setAge(25);
person1.setEmail("jane@example.com");

console.log("Updated Name: " + person1.getName());
console.log("Updated Age: " + person1.getAge());
console.log("Updated Email: " + person1.getEmail());



//4.class to calculate the uber price

class UberPriceCalculator {
  constructor(baseFare, costPerMile, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distance, time) {
    const fare = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute);
    return fare;
  }
}

// Ex:-
const calculator = new UberPriceCalculator(2.0, 1.5, 0.2); // Example pricing values

const distanceInMiles = 5;
const timeInMinutes = 15;

const price = calculator.calculatePrice(distanceInMiles, timeInMinutes);
console.log(`The Uber price for a ${distanceInMiles} mile trip taking ${timeInMinutes} minutes is $${price}`);
  
    
