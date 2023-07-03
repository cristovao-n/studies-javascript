

function tests(re, str) {

   console.log(re.exec(str));

   if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);

   } else {
      console.log(`${str} does NOT match ${re.source}`);
      
   }
}

let re, str;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;          // Must start with
re = / world$/i;    //  Must end with
re = /^hello$/i;   //   Must begin and end with  
re = /h.llo/i;    //    Matches any one character
re = /he*llo/i;  //     Matches any (preceding?) character 0 or more ????

re = /gre?a?y/i;     // Optional character
re = /gre?a?y\?/;   //  Escape character


str = '3x9x5x';


tests(re, str);