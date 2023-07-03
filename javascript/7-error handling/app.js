let val;

const user = {email:'john@gmail.com'};

try {

   // ReferenceError
   // myFunction();

   // TypeError
   // null.myFunction();
   
   // SyntaxError
   // eval('"Hello" World');    // what eval does: eval('2,5') returns 7

   // URIError 
   // decodeURIComponent('%');

   if(!user.nome) {
      throw new SyntaxError('User has no name');
   }
   // console.log(!user.name);
} catch (error) {
   val = error;
   val = error.message;
   val = error.name;
   val = error instanceof RangeError;
   val = error instanceof ReferenceError;
   val = error instanceof SyntaxError;
   val = error instanceof TypeError;
   val = error instanceof URIError;
   val = error instanceof EvalError;
   // val = error instanceof InternalError; it didn't work
   val = error;
   console.log('Error: ' + val);
} finally {
   console.log("it'll run no mather what");
}

console.log('Program continues...');