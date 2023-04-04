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

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

var first = 0;
var second = 0;
var e = arr[0].length;

for (let i = 0; i < arr.length; i++) {
  e -= 1;
  first += arr[i][i];
  second += arr[i][e];
}

console.log(second - first);
