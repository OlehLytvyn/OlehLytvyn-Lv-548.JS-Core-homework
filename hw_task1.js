// task 2
console.log('Lytvyn');

// task 3
let someData = 'Hello friend';
let someAnotherData = 1991;

alert(someData, someAnotherData);
someData = someAnotherData;
console.log(someData);

// task 4
let taskObj = {
  name: 'task',
  numTask: 1,
  complitedTask: false,
  consummateTask: undefined,
  gainScore: null,
};

console.log(taskObj);

// task 5
let isAdult = confirm('Have you turned 18 already?');
if (isAdult === true) {
  console.log('Congratulations! now you may buy alcohol :)');
} else if (isAdult === false) {
  console.log('Sorry, you are underaged :( ');
}

// task 6

const userName = 'Oleh';
const userSurname = 'Lytvyn';
let studyGroup = 'Lv-548.JS Core';
const userAge = 1991;
let maritalStatus = false;
let YouWereNeverReallyHere;
let expectation = null;

console.log(
  typeof userAge,
  typeof maritalStatus,
  typeof userName,
  typeof userSurname,
  typeof studyGroup,
  typeof YouWereNeverReallyHere,
  typeof expectation
);

// task 7

let userLogin = prompt('What is your login? ', '');
if (userLogin !== null) {
  alert('Welcome, ' + userLogin);
}

let userMail = prompt('What is your e-mail? ', '');
if (userMail !== null) {
  alert('Your mail is, ' + userMail + ' , please, make sure he is correct!');
}

let userPass = prompt('What is your password? ', '');
if (userPass !== null) {
  alert('Your password is accept!');
}

// task 8

function timeCounter() {
  
  let countHour = 60 * 60;
  let countDay = 24 * 3600;
  let countMonth = 31 * 86400;

  alert('There are ' + countHour + ' seconds in hour ');
  alert('There are ' + countDay + ' seconds in day');
  alert('There are ' + countMonth + ' seconds in one month ');
}

timeCounter();

