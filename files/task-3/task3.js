// task 8

// push(); slice(); split(); charAt(); toUpperCase(); joi

function capitalizeAllFirstLetter(str) {
  let giveArr = str.split(' ');
  let getArr = [];

  for (i = 0; i < giveArr.length; i++) {
    getArr.push(giveArr[i].charAt(0).toUpperCase() + giveArr[i].slice(1));
  }

  return getArr.join(' ');
}

console.log(capitalizeAllFirstLetter('hello friend'));

// task 7

// Math.max

const lastElement = function (array, x) {
  if (array === null) return void 0;
  if (x === null) return array[array.length - 1];
  return array.slice(Math.max(array.length - x, 0));
};

console.log(lastElement([3, 4, 10, -5], 1));
console.log(lastElement([3, 4, 10, -5], 2));
console.log(lastElement([3, 4, 10, -5], 8));

// task 6

//

function checkUnique(arr) {
  const seenValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (seenValues[arr[i]]) {
      // якщо всі елементи схожі
      return false;
    } else {
      // побачили елемент, який відрізняється
      seenValues[arr[i]] = true;
    }
  }

  return true;
}

console.log(checkUnique([1, 2, 3, 5, 3]));
console.log(checkUnique([1, 2, 3, 5, 11]));

// task 5

// Math.min
// ...arr

const arr = [12, 14, 4, -4, 0.2];
const min = Math.min(...arr);
console.log(arr);
console.log(min);

// (...arr)

function sheFoundMin(arr) {
  return Math.min(...arr);
}
console.log(sheFoundMin([12, 14, 4, -4, 0.2]));

// task 4

// Math.pow(a, b);

function raiseToDegree(a, b) {
  return Math.pow(a, b);
}

console.log(raiseToDegree(3, 4));

// task 3

// task 2

// task 1
