// syntactic sugar
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
    
    marries(person2) {
        return `${this.firstName} married ${person2.firstName}`;
    }

    static toMarry(person1, person2) {
        return `${person1.firstName} married ${person2.firstName}`;
    }

}


const cris = new Person('Cristovao', 'Neto', '7-11-1980');
const bia = new Person('Ana', 'Cavalcanti', '7-1-1908')

console.log(cris);
console.log(cris.greeting());
console.log(cris.calculateAge());
cris.getsMarried('Cavalcanti');
console.log(cris.greeting());

// static methods
// in this case, you could use a non-static method too
console.log(Person.toMarry(cris, bia));
// or you can use this
console.log(cris.marries(bia));


// class Integer

class Integer {
    constructor (number){
        this.number = number;
    }  

    static sum (n1, n2) {
        if(isNaN(n1) || isNaN(n2)) {
            return 'Please enter two numbers';

        } else {
            return n1+n2;
        }
    }
}


let x = new Integer(8);
console.log(x.number);
console.log(Integer.sum(5,10));
