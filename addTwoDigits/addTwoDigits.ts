function addTwoDigits(n: any): number {
  let list = n.toString().split("");
  return list.reduce((x, y) => Number(x) + Number(y));
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(2990245));
