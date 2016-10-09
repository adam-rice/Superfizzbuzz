# Super-Fizz-Buzz

[Try it out.](https://adam-rice.github.io/Superfizzbuzz/)

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
