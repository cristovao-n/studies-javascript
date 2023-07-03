let re, result;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search - all instances, not just the first one

result = re;
result = re.source;

// exec() = returns result in an array or null
result = re.exec('john doe hello world');
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
result = re.test('Hellow');

// match() - returns result array or null
result = 'Opam'.match(re);

// search() - returns index of the first match, if not found returns -1
result = 'Crisnzx hello'.search(re);

// replace() - returns a new string with some or all matches of a pattern
result = 'hello hello cris hello'.replace(re, 'hi');



console.log(result);