function tests(re, str) {

   console.log(re.exec(str));

   if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);

   } else {
      console.log(`${str} does NOT match ${re.source}`);
      
   }
}

let re, str;

// Shorthand character classes
re = /\w/;     // Word character - alphanumeric (any letter or number) or _
re = /\w+/;     // Word character - (+) - one or more
re = /\W/;      // Non-word character

re = /\d/;      // Match any digit
re = /\D/;      // Match any non-digit

re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char

re = /Hell\b/i;  // Word boundary

// Assertions
re = /o(?=i)/;   // Match o only if it's followed by i
re = /o(?!i)/;   // Match o only if it's NOT followed by i


str = 'oa';

tests(re, str);