// Window methods / objects / properties

// window.console.log(123);

// Alert
// window.alert('Hello World');


// // Prompt
// const input = prompt();
// alert(input);

// Confirm

//  if(confirm('Are you sure???')) {
//     console.log('OK! Great');
//  } else {
//     console.log('Why not?');
// }

let val;

// outter height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width

val = window.innerHeight;
val = window.innerWidth;

// Scroll points

val = window.scrollY;
val = window.scrollX;

// Location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'https://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);

// val = window.history.length;

// Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);