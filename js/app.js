'use strict';

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

document.getElementById('user_name').innerHTML = userName;