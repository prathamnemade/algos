let data = [64, 25, 12, 22, 11];

let i = 0;
while (i < data.length) {
  let j = i;
  let minIndex = null;
  while (0 <= j) {
    if (data[j] > data[i]) {
      minIndex = j;
    }
    j--;
  }
  if (minIndex != null) {
    let k = i;
    while (k > minIndex) {
      let temp = data[k];
      data[k] = data[k - 1];
      data[k - 1] = temp;
      k--;
    }
  }
  i++;
}
console.log(data);
