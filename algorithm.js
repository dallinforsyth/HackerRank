// var a = [5, 6, 7];
// var b = [3, 6, 10];

// var acount = 0;
// var bcount = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] > b[i]) {
//     acount += 1;
//   } else if (a[i] < b[i]) {
//     bcount += 1;
//   }
// }
// console.log(acount);
// console.log(bcount);
// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2][2]);

// console.log(arr[0][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);

// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

// var first = 0;
// var second = 0;
// var e = arr[0].length;

// for (let i = 0; i < arr.length; i++) {
//   e -= 1;
//   first += arr[i][i];
//   second += arr[i][e];
// }

// console.log(second - first);
// var arr = [-4, 3, -9, 0, 4, 1];

// function plusMinus(arr) {
//   var neg = 0.0;
//   var zero = 0.0;
//   var pos = 0.0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       pos += 1;
//     } else if (arr[i] === 0) {
//       zero += 1;
//     } else if (arr[i] < 0) {
//       neg += 1;
//     }
//   }
//   var posRatio = (pos / arr.length).toFixed(6);
//   var negRatio = (neg / arr.length).toFixed(6);
//   var zeroRatio = (zero / arr.length).toFixed(6);
//   return posRatio, negRatio, zeroRatio;
// }
// console.log(plusMinus(arr));

// var arr = [5, 5, 5, 5, 5];

// function miniMaxSum(arr) {
//   var min = arr[0];
//   var max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     } else if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   var minSum = 0;
//   var maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min) {
//       maxSum += arr[i];
//     }
//     if (arr[i] !== max) {
//       minSum += arr[i];
//     }
//   }
//   console.log(minSum, maxSum);
// }

// miniMaxSum(arr);

// function birthdayCakeCandles(candles) {
//   var max = candles[0];
//   var numOfMax = 0;
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] > max) {
//       max = candles[i];
//     }
//   }
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === max) {
//       numOfMax += 1;
//     }
//   }

//   console.log(numOfMax);
// }

// birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]);

// function timeConversion(s) {
//   var pm = s.slice(-2);
//   var time = Number(s.slice(0, 2));
//   var total = s.slice(2, -2);
//   var am = s.slice(0, -2);
//   if (pm === "PM") {
//     if (time < 12) {
//       time += 12;
//     } else if (time === 12) {
//       time = "00";
//     }
//     return time + total;
//   } else {
//     // time.toString + console.log(time);
//     return am;
//   }
// }
// console.log(timeConversion("12:00:00PM"));

// function gradingStudents(grades) {
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < 37) {
//       break;
//     } else if (grades[i] % 100) {
//       grades[i] + 2;
//     }
//   }
//   return grades;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

// var a = [5, 6, 7];
// var b = [3, 6, 10];

// var acount = 0;
// var bcount = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] > b[i]) {
//     acount += 1;
//   } else if (a[i] < b[i]) {
//     bcount += 1;
//   }
// }
// console.log(acount);
// console.log(bcount);
// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2][2]);

// console.log(arr[0][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);

// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

// var first = 0;
// var second = 0;
// var e = arr[0].length;

// for (let i = 0; i < arr.length; i++) {
//   e -= 1;
//   first += arr[i][i];
//   second += arr[i][e];
// }

// console.log(second - first);
// var arr = [-4, 3, -9, 0, 4, 1];

// function plusMinus(arr) {
//   var neg = 0.0;
//   var zero = 0.0;
//   var pos = 0.0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       pos += 1;
//     } else if (arr[i] === 0) {
//       zero += 1;
//     } else if (arr[i] < 0) {
//       neg += 1;
//     }
//   }
//   var posRatio = (pos / arr.length).toFixed(6);
//   var negRatio = (neg / arr.length).toFixed(6);
//   var zeroRatio = (zero / arr.length).toFixed(6);
//   return posRatio, negRatio, zeroRatio;
// }
// console.log(plusMinus(arr));

// var arr = [5, 5, 5, 5, 5];

// function miniMaxSum(arr) {
//   var min = arr[0];
//   var max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     } else if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   var minSum = 0;
//   var maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min) {
//       maxSum += arr[i];
//     }
//     if (arr[i] !== max) {
//       minSum += arr[i];
//     }
//   }
//   console.log(minSum, maxSum);
// }

// miniMaxSum(arr);

// function birthdayCakeCandles(candles) {
//   var max = candles[0];
//   var numOfMax = 0;
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] > max) {
//       max = candles[i];
//     }
//   }
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === max) {
//       numOfMax += 1;
//     }
//   }

//   console.log(numOfMax);
// }

// birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]);

// function timeConversion(s) {
//   var pm = s.slice(-2);
//   var time = Number(s.slice(0, 2));
//   var total = s.slice(2, -2);
//   var am = s.slice(0, -2);
//   if (pm === "PM") {
//     if (time < 12) {
//       time += 12;
//     } else if (time === 12) {
//       time = "00";
//     }
//     return time + total;
//   } else {
//     // time.toString + console.log(time);
//     return am;
//   }
// }
// console.log(timeConversion("12:00:00PM"));

// function gradingStudents(grades) {
//   // Write your code here
//   for (let i = 0; i < grades.length; i++) {
//     if ((grades[i] + 2) % 5 == 0 && grades[i] + 2 > 39) {
//       grades[i] = grades[i] + 2;
//     } else if ((grades[i] + 1) % 5 == 0 && grades[i] + 2 > 39) {
//       grades[i] = grades[i] + 1;
//     }
//   }
//   retursdssedfsedawn grades;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   var appleHit = 0;
//   var orangeHit = 0;
//   for (let i = 0; i < apples.length; i++) {
//     if (apples[i] + a <= t && apples[i] + a >= s) {
//       appleHit += 1;
//     }
//   }
//   for (let e = 0; e < oranges.length; e++) {
//     if (oranges[e] + b <= t && oranges[e] + b >= s) {
//       orangeHit += 1;
//     }
//   }
//   console.log(appleHit);
//   console.log(orangeHit);
// }
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// function kangaroo(x1, v1, x2, v2) {
//   if (x1 < x2) {
//     for (let i = 0; x1 < x2 && i <= 10000; i++) {
//       x1 += v1;
//       x2 += v2;
//     }
//     if (x1 === x2) {
//       return "YES";
//     }
//   } else if (x2 < x1) {
//     for (let i = 0; x2 < x1 && i <= 10000; i++) {
//       x1 += v1;
//       x2 += v2;
//     }
//     if (x2 === x1) {
//       return "YES";
//     }
//   }
//   return "NO";
// }

// console.log(kangaroo(0, 3, 4, 2));

// function getTotalX(a, b) {
//   // Write your code here
// }

// function birthday(s, d, m) {
//   // Write your code hereeeeee
// }

// function breakingRecords(scores) {
//   var max = scores[0];
//   var min = scores[0];
//   var maxCount = 0;
//   var minCount = 0;
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > max) {
//       maxCount += 1;
//       max = scores[i];
//     } else if (scores[i] < min) {
//       minCount += 1;
//       min = scores[i];
//     }
//   }
//   console.log(maxCount, minCount);
// }

// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);

function moduloZero(number, factor) {
  return number % factor === 0;
}

function getTotalX(a, b) {
  var array1 = [];
  var array2 = [];
  for (let i = 1; i <= 100; i++) {
    if (a.every((aNumber) => i % aNumber === 0)) {
      array1.push(i);
    }
  }
  array1.forEach((number) => {
    if (b.every((bNumber) => bNumber % number === 0)) {
      array2.push(number);
    }
  });
  return array2.length;
}

getTotalX([2, 4], [16, 32, 96]);
