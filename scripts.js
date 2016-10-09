// In this assignment you'll implement an algorithm that is actually used in some programmer interviews. And the really shocking part is that some people fail it! This is an extension of the FizzBuzz problem. Write an implementation of the following algorithm.
//
// Iterate through the numbers 0 through 105 and for each one print out exactly one thing. These rules are in descending priority:
//
// If it's evenly divisible by 3, 5, and 7 print SuperFizzBuzz
// If it's evenly divisible by 3 and 7 print SuperFizz
// If it's evenly divisible by 5 and 7 print SuperBuzz
// If it's evenly divisible by 3 and 5 print FizzBuzz
// If it's evenly divisible by 3, print Fizz
// If it's evenly divisible by 5, print Buzz
// If it's evenly divisible by 7, print Super
// Otherwise print just the number

var input = document.getElementById('input');
var check = document.getElementById('check');
var paragraph = document.getElementById('output');
var reset = document.getElementById('reset');
var log = document.getElementById('log');
var fullList = document.getElementById('fullList');
var clearLongList = document.getElementById('clearLongList');

check.addEventListener('click', function() {
  superFizzBuzz();
  clearField();
});

reset.addEventListener('click', function() {
  resetPage();
});

log.addEventListener('click', function() {
  conLog();
});

clearLongList.addEventListener('click', function() {
  fullList.innerText = '';
});

function superFizzBuzz() {
  var n = input.value;
  if (n === '') {
    return paragraph.innerText = 'Please enter a number.';
  } else if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
    return paragraph.innerText = n +' results in SuperFizzBuzz';
  } else if (n % 3 === 0 && n % 7 === 0) {
      return paragraph.innerText = n +' results in SuperFizz';
    } else if (n % 5 === 0 && n % 7 === 0) {
      return paragraph.innerText = n +' results in SuperBuzz';
    } else if (n % 3 === 0 && n % 5 === 0) {
      return paragraph.innerText = n +' results in FizzBuzz';
    } else if (n % 3 === 0) {
      return paragraph.innerText = n +' results in Fizz';
    } else if (n % 5 === 0) {
      return paragraph.innerText = n +' results in Buzz';
    } else if (n % 7 === 0) {
      return paragraph.innerText = n +' results in Super';
    } else {
      return paragraph.innerText = n;
    }
}

function clearField() {
  input.value = '';
}

function resetPage() {
  paragraph.innerText = '';
}

function conLog() {
  for (var i = 1; i <= 105; i++ ) {
    var empty = '';
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) empty += 'SuperFizzBuzz';
    else if (i % 3 === 0 && i % 7 === 0) empty += 'SuperFizz';
    else if (i % 5 === 0 && i % 7 === 0) empty += 'SuperBuzz';
    else if (i % 3 === 0 && i % 5 === 0) empty += 'FizzBuzz';
    else if (i % 3 === 0) empty += 'Fizz';
    else if (i % 5 === 0) empty += 'Buzz';
    else if (i % 7 === 0) empty += 'Super';
    console.log(empty || i);
    fullList.innerHTML += (empty || i) + '<br/>';
    }
}
