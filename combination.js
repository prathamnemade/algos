const data = [1, 2, 3, 4, 5];
let output = [];
let i = 0;
let j = i + 1;
let k = j + 1;
while (i < data.length) {
  while (j < data.length) {
    while (k < data.length) {
      console.log(data[i], data[j], data[k]);
      k++;
    }
    j++;
    k = j + 1;
  }
  i++;
  j = i + 1;
  k = j + 1;
}
