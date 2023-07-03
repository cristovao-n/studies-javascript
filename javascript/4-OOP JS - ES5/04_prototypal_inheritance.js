// PERSON

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting()); 


// CUSTOMER

function Customer(firstName, lastName, phone, membership) {
    // herdando atributos
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

// herdando o prototype de Person
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;


const customer1 = new Customer('Tom', 'Smith', '4002-8922', 'Standard');

// console.log(customer1.phone);
console.log(customer1.greeting());