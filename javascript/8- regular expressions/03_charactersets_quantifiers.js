function tests(re, str) {

   console.log(re.exec(str));

   if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);

   } else {
      console.log(`${str} does NOT match ${re.source}`);
      
   }
}

let re, str;


// Brackets [] - Character Sets

re = /gr[ae]y/i;    // Must be a or e
re = /[GF]ray/;    // Must be G or F
re = /[^GF]ray/;   // Match anything escept G or F
re = /[A-Z]ray/;   // Match any uppercase letter
re = /[a-z]ray/;   // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any letter
re = /[0-9]ray/;   // Match any digit

// Braces {} - Quantifiers

re = /Hel{2}o/;    // Must occur exactly {x} amount of times
re = /Hel{2,4}o/;    // Must occur exactly {x, y} amount of times
re = /Hel{2,}o/;    // Must occur at least {x} amount of times

// Parentheses () - Grouping

re = /^([0-9]x){3}$/;


re = /^([0-9]x){3}$/;

str = '3xx5x';

tests(re, str);