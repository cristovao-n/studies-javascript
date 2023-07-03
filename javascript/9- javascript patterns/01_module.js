 // MODULE PATTERN - Basic structure

 (function() {
   // private variables and functions
   return {
      // public variables and functions
   }
 })();

 const UIControler = (function() {
    let text = 'Hello World';

    const changeText = function() {
       const element = document.querySelector('h1');
       element.textContent = text;
    }

    return {
       callChangeText: function() {
          changeText(text);
          console.log(text);
       }
    }
 })();

//  UIControler.callChangeText();
 

// REVEALING MODULE PATTERN

const ItemControler = (function() {
   let data = [];

   function add(item) {
      data.push(item);
      console.log('Item added...');
   }

   function get(id) {
      return data.find(item => {
         return item.id === id;
      })
   }

   function getAll() {
      return data;
   }

   return {
      add,
      get,
      getAll
   }
})();

ItemControler.add({id: 1, name: 'John'});
ItemControler.add({id: 2, name: 'Jom'});
ItemControler.add({id: 3, name: 'Jon'});
ItemControler.add({id: 4, name: 'Johm'});
ItemControler.add({id: 5, name: 'Jonh'});
ItemControler.add({id: 6, name: 'Jomh'});

console.log(ItemControler.get(4));