let data = [1, 4, 1, 2, 7, 5, 2];

let i = 0;
let out = Array(10).fill(0);
let output = Array(data.length).fill(null);

while (i < data.length) {
  out[data[i]] += 1;
  i++;
}
i = 0;
while (i < out.length - 1) {
  out[i + 1] = out[i] + out[i + 1];
  i++;
}
i = 0;
console.log(out);
while (i < data.length) {
  let element = data[i];
  if (output[out[element] - 1] === null) {
    output[out[element] - 1] = element;
  }
  out[element] -= 1;
  i++;
}
console.log(output);
