'use strict';

//Lab 2

var userName = prompt('What is your name?');

var pets = prompt('Do I have any pets? Answer with yes or no');
// console.log('Number of pets: ', pets);
if (pets.toLowerCase() === 'y' || pets.toLowerCase() === 'yes') {
  alert('That is incorrect I currently have not pets');
} else {
  alert('Correct I currently have no pets');
}

var drive = prompt('Guess how many times I\'ve driven across the country');
// console.log('Times driven cross country: ', drive);
if (drive === '4' || drive === 'four') {
  alert('Correct I\'ve driven cross-country four times');
} else {
  alert('That is incorrect I have driven cross-country four times');
}

var status = prompt('Am I married? Answer with yes or no');
// console.log('Status: ', status);
if (status.toLowerCase() === 'y' || status.toLowerCase() === 'yes') {
  alert('That is incorrect I am single');
} else {
  alert('Correct I\'m single');
}

var boards = prompt('Guess how many surfboards I own');
// console.log('Number of surfboards: ', boards);
if (boards === '3' || boards.toLowerCase() === 'three') {
  alert('Correct I own 3 surfboards');
} else {
  alert('That is incorrect I own 3 surfboards');
}

var birthplace = prompt('Guess where I was born');
// console.log('Birthplace: ', birthplace);
if (birthplace.toLowerCase() === 'philippines' || birthplace.toLowerCase() === 'the philippines') {
  alert('Correct that is where I was born');
} else {
  alert('Incorrect I was not born in ' + birthplace);
}

//Lab 3

var number = 25;
for (var i = 0; i < 4; i++) {
  var entry = prompt('I am thinking of a number between 1 and 100. Guess what that number is');
  var guess = parseInt(entry);
  if (guess === number) {
    alert('Are you a mind reader? You just read my mind!');
    break;
  } else if (guess > number) {
    alert('Nope too high');
  } else {
    alert('Too low');
  }
}
alert('The number was 25');

var correct = 0;
function check(fruit) {
  var fruits = ['apples', 'pears', 'bananas', 'acai'];
  for (var i = 0; i < fruits.length; i++) {
    if (fruit === fruit[i]) {
      correct++;
      //Prevent hacking of score
      fruits.splice(i,0);

      return true;
    }
  }
  return false;
}

for (var i = 0; i < 6; i++) {
  var fruityGuess = prompt('Try to guess what fruit I like');

}

document.getElementById('user_name').innerHTML = userName;