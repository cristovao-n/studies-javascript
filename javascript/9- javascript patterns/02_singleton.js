// We can only have one instance of the object
// This pattern allows you to create an object that has only one instance.
// If you need to have only one object, you would create a singleton object.
const Singleton = (function() {
   let instance;

   function createInstance() {
      const object = new Object({name: 'JOM'})
      return object;
   }

   return {
      getInstance: function() {
         // The instance will be created only if there's no instance
         if(!instance) {
            instance = createInstance();
         }
         return instance;
      }
   }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);
console.log(instanceB);

