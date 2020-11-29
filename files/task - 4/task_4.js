// task 1

function testThrow(num) {
  if (typeof num !== 'number') {
    throw new Error('An error happened');
  }
  return num;
}
console.log(testThrow(5));
console.log(testThrow('test'));

// task 2

function calcRectangleArea(width, height) {
  try {
    if (isNaN(width) || isNaN(height)) {
      throw new TypeError('Parameter is not a number!');
    }

    return width * height;
  } catch (err) {
    if (err.name === 'TypeError') {
      console.log(err.name + ': ' + err.message);
    } else {
      throw console.log(err);
    }
  }
}

console.log(calcRectangleArea(5, 7));
console.log(calcRectangleArea(5, 'test'));

// task 3

function checkAge() {
  const enteredValue = prompt('Enter the value: ', '');
  try {
    if (enteredValue === '') {
      throw new SyntaxError('The field is empty! Please enter your age');
    } else if (isNaN(Number(enteredValue))) {
      throw new TypeError('Sorry, you entered a non-number values ');
    } else if (0 < enteredValue && enteredValue < 18) {
      throw new Error('Sorry, you are not adult');
    }
    alert('Welcome, you have some access');
  } catch (err) {
    if (
      err.name === 'SyntaxError' ||
      err.name === 'TypeError' ||
      err.name === 'Error'
    ) {
      alert(err.name + ': ' + err.message);
    } else {
      throw err;
    }
  }
}
checkAge();

// task 4
// class
class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}
//
function showingMonth(month) {
  const calendarArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  //
  if (typeof month != 'number') {
    throw new TypeError('Incorrect input type!');
  } else if (month > 12 || month <= 0) {
    throw new MonthException('Incorrect month number!');
  } else {
    return calendarArr[month - 1];
  }
}

try {
  console.log(showingMonth(13));
} catch (err) {
  console.log(err.name + ' : ' + err.message);
}
try {
  console.log(showingMonth('July'));
} catch (err) {
  console.log(err.name + ' : ' + err.message);
}

// task 5

let users = new Array();
function showUser(id) {
  if (id < 0) {
    throw new RangeError('ID must not be negative: ' + id);
  }
  return { id: id };
}

function showUsers(ids) {
  try {
    for (let i in ids) {
      users.push(showUser(ids[i]));
    }
  } catch (err) {
    console.log(err.name + ': ' + err.message);
    let id = err.message.split(' ');
    let temp = Number(id[id.length - 1]);
    let newArr = ids.slice(ids.indexOf(temp) + 1, ids.length);
    showUsers(newArr);
  }
}

// let testUsers = [1, 2, -4, 4, -7, 12, 34, -56];
let arr = [7, -12, 44, 22];
// showUsers(testUsers);
showUsers(arr);

// console.log(testUsers);
console.log(users);
