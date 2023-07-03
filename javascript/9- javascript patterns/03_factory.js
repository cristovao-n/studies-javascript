//MemberFactory the ES6 way of using Classes

class MemberFactory {

   createMember(name, type) {
      let member;

      if (type === 'simple') {
         member = new SimpleMembership();
      } else if (type === 'standard') {
         member = new StandardMembership();
      } else if (type === 'super') {
         member = new SuperMembership();
      }
      //I just assigned the 'type' inside the Membership
      member.name = name;
      member.define = function() {
         console.log(`${this.name} (${this.type}) ${this.cost}`);
      }
      return member;
   }
}

class SimpleMembership {
   constructor() {
      // this.name = name;
      this.type = 'simple';
      this.cost = '$5.00';
   }
}

class StandardMembership {
   constructor() {
      // this.name = name;
      this.type = 'standard';
      this.cost = '$10.00';
   }
}

class SuperMembership {
   constructor() {
      // this.name = name;
      this.type = 'super';
      this.cost = '25.00';
   }
}
const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Johnson', 'simple'));
members.push(factory.createMember('Mary Williams', 'standard'));
members.push(factory.createMember('Harry Jones', 'standard'));
members.push(factory.createMember('Lisa Kudrow', 'super'));
members.forEach(member => member.define());