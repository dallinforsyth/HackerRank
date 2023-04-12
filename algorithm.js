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

function timeConversion(s) {
  var ampm = s.slice(-2);
  var time = Number(s.slice(0, 2));
  var total = s.slice(2, -2);

  if (ampm === "PM") {
    time += 12;
    if (time === 24) {
      time = "00";
    }
  }
  // time.toString + console.log(time);
  console.log(time + total);
}
timeConversion("07:05:45PM");
