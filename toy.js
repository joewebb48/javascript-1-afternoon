// FizzBuzz - Bob Ross edition
// write a function that takes in one number.
// Starting at 1, console log every number up to the number passed in.
// If the number being logged is divisible by 3 log 'Bob' instead.
// If the number is divisible by 5 we will log 'Ross' instead.
// If they are divisible by both 3 and 5 we will log 'Bob Ross'
​
// Challenge Mode
// Use a 'while' or 'do while' loop

function fizzBuzzer(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('bob ross');
    } else if (i % 3 === 0) {
      console.log('bob');
    } else if (i % 5 === 0) {
      console.log('ross');
    } else {
      console.log(i);
    }
  }
}

fizzBuzzer(9);
