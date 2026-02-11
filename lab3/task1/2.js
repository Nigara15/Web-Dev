alert('Hello');
alert('World');

alert("Hello")[1, 2].forEach(alert);

alert("some code");
// "use strict" below is ignored--it must be at the top
"use strict";
// strict mode is not activated

let hello = 'Hello world!';
let message;
// copy 'Hello world' from hello into message
message = hello;
// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?

let n = 123;
n = 12.345;
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

/ No effect on numbers
let x = 1;
alert( +x ); // 1
let y = -2;
alert( +y ); // -2
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year < 2015) {
    alert( 'Too early...' );
} else if (year > 2015) {
    alert( 'Too late' );
} else {
    alert( 'Exactly!' );
}

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
alert( message );

let message;
if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
    alert( 'The time is 12:30' );
}

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = null;
let width = null;
// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
}

let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Sum: ' + sum );

let a = 2 + 2;
switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}

let a = 3;
switch (a) {
    case 4:
        alert('Right!');
        break;
    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;
    default:
        alert('The result is strange. Really.');
}

function showMessage(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    alert( from + ': ' + text );
}
let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "You agreed." );
}
function showCancel() {
    alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel)

let age = 16; // take 16 as an example
if (age < 18) {
    welcome();               // \   (runs)
    function welcome() {     //  |
        alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
    welcome();               // /   (runs)
} else {
    function welcome() {
        alert("Greetings!");
    }
}
// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3

let age = prompt('Your age?', 18);
switch (age) {
    case 18:
        alert("Won't work"); // the result of prompt is a string, not a number
        break;
    case "18":
        alert("This works!");
        break;
    default:
        alert("Any value not equal to one above");
}