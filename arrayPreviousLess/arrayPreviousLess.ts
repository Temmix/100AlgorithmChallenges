function arrayPreviousLess(items: number[]): number[] {
  const list = [];
  items.forEach((x, i) => {
    items[i - 1] < x ? list.push(items[i - 1]) : list.push(-1);
  });
  return list;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
