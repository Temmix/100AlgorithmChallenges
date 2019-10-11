function boxBlur(image: number[][]): number[][] {
  let res = 0;
  image.map(x => [x.reduce((a, b) => a + b)]).forEach(y => (res += y[0]));
  return [[Math.floor(res / 9)]];
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
