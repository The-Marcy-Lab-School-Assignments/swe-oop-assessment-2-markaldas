class Phone {
  #password = 'TimeToLearn882';

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.battery = 100;
  }

  get batteryLevel() {
    return this.battery;
  }

  makeCall(number) {
    this.battery -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.battery = 100;
    return `Phone fully charged`;
  }

  unlock(password) {
    if (password === this.#password) {
      return true;
    }
    return false;
  }
}

class iPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super('Apple', model, password);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    this.battery -= 5;
    return `Calling ${number} using FaceTime audio`;
  }

  faceTime(name) {
    this.battery -= 10;
    return `Facetiming ${name}`;
  }
}

// TEST YOUR CODE HERE
const flipPhone = new Phone('Nokia', 'Flip', 'TimeToLearn882');
console.log(flipPhone); // Phone { brand: "Nokia", model: "Flip", batteryLevel: 100 }

// 1. Making a call and checking battery
console.log(flipPhone.makeCall('123-456-7890')); // Calling 123-456-7890
console.log(flipPhone.batteryLevel); // 95

// 2. Charging and checking battery
console.log(flipPhone.charge()); // Phone fully charged
console.log(flipPhone.batteryLevel); // 100

// 3. Unlocking the phone
console.log(flipPhone.unlock('TimeToLearn882')); // true
console.log(flipPhone.unlock('TimeToLearn883')); // false

const smartPhone = new iPhone('iPhone 14 Pro', 'TimeToLearn882', 3);

console.log(smartPhone); // iPhone { brand: "Apple", model: "iPhone 14 Pro", numberOfCameras: 3, batteryLevel: 100}

// 1. Making a call
console.log(smartPhone.makeCall('555-1234')); // Calling 555-1234 using FaceTime audio
console.log(smartPhone.batteryLevel); // Should be 95

// 2. Using the faceTime method
console.log(smartPhone.faceTime('Alice')); // Facetiming Alice
console.log(smartPhone.batteryLevel); // Should be 85

// 3. Charge the phone
console.log(smartPhone.charge()); // Phone fully charged
console.log(smartPhone.batteryLevel); // Should be 100

// 4. Unlock the phone
console.log(smartPhone.unlock('0000')); // Invalid password
console.log(smartPhone.unlock('TimeToLearn882')); // true

// DO NOT REMOVE
module.exports = { Phone, iPhone };
