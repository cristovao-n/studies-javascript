class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {

        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    greeting() {
        return `Hello there Mr. ${this.lastName}`;
    }

    static getMembershipCost() {
        return 500;
    }
}

const crisP = new Person('Cristovão', 'Neto');
const crisC = new Customer('Cristovão', 'Neto', '4002-8922', 'Standard');

// polymorphism
console.log(crisP.greeting());
console.log(crisC.greeting());

console.log(Customer.getMembershipCost());
