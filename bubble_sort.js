let data = [64, 25, 12, 22, 11]

let i = 0;
while (i < data.length - 1) {
  let j = 0;
  while (j < data.length) {
    if (data[j] > data[j + 1]) {
      let temp = data[j + 1];
      data[j + 1] = data[j];
      data[j] = temp;
    }
    j++;
  }
  i++;
}
console.log(data);
