var a = [5, 6, 7];
var b = [3, 6, 10];

var acount = 0;
var bcount = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) {
    acount += 1;
  } else if (a[i] < b[i]) {
    bcount += 1;
  }
}
console.log(acount);
console.log(bcount);
