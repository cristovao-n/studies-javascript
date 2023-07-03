
// Pèrson constructor

function Person(name, dob) {
    this.name = 'name';
    this.birthday = new Date(dob);
    
    // method is a function that is inside of an object
    this.calculateAge = function(){
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const mauricio = new Person('mauricio', '2-17-2011');
const teobaldo = new Person('teobaldo', '4-12-1988');

console.log(mauricio.calculateAge());
console.log(teobaldo.calculateAge());