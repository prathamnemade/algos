let data = [64, 25, 12, 22, 11]

let i = 0;
let minValue = data[0];
let minIndex = 0;
while (i < data.length) {
  let j = i + 1;
  while (j < data.length) {
    if (minValue > data[j]) {
      minValue = data[j];
      minIndex = j;
    }
    j++;
  }
  let temp = data[i];
  data[i] = data[minIndex];
  data[minIndex] = temp;
  i++
  minValue = data[i];
  minIndex = i
}
console.log(data);
