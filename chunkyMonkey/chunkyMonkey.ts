function chunkyMonkey(arr: any[], size: number): any[][] {
  const list = [];
  const length = Math.ceil(arr.length / size);
  for (let i = 0; i < length; i++) {
    list.push(arr.slice(i * size, size + i * size));
  }
  return list;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
