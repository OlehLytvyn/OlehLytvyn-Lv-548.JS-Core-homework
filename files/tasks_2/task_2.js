// task 7
// v1

const dayPart = new Date().getHours();

switch (true) {
  case dayPart <= 23 && dayPart <= 5:
    console.log('Good Night');
    break;
  case dayPart > 5 && dayPart < 11:
    console.log('Good Morning');
    break;
  case dayPart >= 11 && dayPart < 17:
    console.log('Good Afternoon');
    break;
  case dayPart >= 17 && dayPart <= 23:
    console.log('Good Evening');
    break;
}

// task 7
// v2

const partOfDay = new Date().getHours();
if (partOfDay <= 23 && partOfDay <= 5) {
  alert('Good Evening');
} else if (partOfDay > 5 && partOfDay < 11) {
  alert('Good Morning');
} else if (partOfDay >= 11 && partOfDay < 17) {
  alert('Good Afternoon');
} else if (partOfDay >= 17 && partOfDay <= 23) {
  alert('Good Evening');
}

// task 6
// triangle
const side1 = parseFloat(prompt('Enter side1: '));
const side2 = parseFloat(prompt('Enter side2: '));
const side3 = parseFloat(prompt('Enter side3: '));
// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;
// calculate the area
const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of the triangle is ${areaValue}`);
//
const isRightTriangle = (side1, side2, side3) => {
  const checkSide1 = side1 * side1 === side2 * side2 + side3 * side3;
  const checkSide2 = side2 * side2 === side1 * side1 + side3 * side3;
  const checkSide3 = side3 * side3 === side1 * side1 + side2 * side2;
  return checkSide1 || checkSide2 || checkSide3;
};
console.log(isRightTriangle(side1, side2, side3));

if (isRightTriangle(side1, side2, side3) === false) {
  console.log('Incorrect data');
} else {
  console.log('Correct data');
}

// task 5

let isAdult = prompt('Are you adult, dude? ', '');
if (isAdult < 21) {
  alert('Sorry man');
} else {
  alert('lets drink');
}

// task 4

let cities = ['Rome', 'Lviv', 'Warsaw'];
alert(cities.join('*').toString());

// task 3
let emptyArr = [];
emptyArr[0] = 14;
emptyArr[1] = 'November';
emptyArr[2] = true;
emptyArr[3] = null;
emptyArr[4] = prompt('Enter an element ', '');

alert(emptyArr[4]);
console.log(emptyArr.length);
//
emptyArr.pop();
console.log(emptyArr.length);

// task 2

const userNum = prompt('Enter the number:', '');

if (userNum % 2 === 0 || userNum % 7 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// task 1

let x = 1;
let y = 2;

let res1 = x + '2';
console.log(res1);
console.log(typeof res1);
//
let res2 = true + '2';
console.log(res2);
console.log(typeof res2);
//
let res3 = x !== y;
console.log(res3);
console.log(typeof res3);
//
let res4 = x + y / 'hello';
console.log(res4);
console.log(typeof res4);
