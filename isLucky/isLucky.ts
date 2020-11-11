function isLucky(n: number): boolean {
  let sumA = 0;
  let sumB = 0;
  const nStr = n.toString();
  const length = nStr.length / 2;
  const allLength = nStr.length;
  for (let i = 1; i <= length; i++) {
    sumA += +nStr[i - 1];
    sumB += +nStr[allLength - i];
  }
  return sumA === sumB;
}

const isLucky2 = (
  num: number,
  list = num.toString().split(""),
  length = list.length / 2
): boolean => {
  return (
    list.slice(0, 2).reduce((x, y) => +x + +y) ===
    list.slice(length).reduce((x, y) => +x + +y)
  );
};

console.log(isLucky(1230));
console.log(isLucky2(1230));

console.log(isLucky(239017));
console.log(isLucky2(239017));
