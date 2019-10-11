function composeRanges(nums: number[]): string[] {
  let list = [];
  let temp = [];
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  for (let i = min; i <= max + 1; i++) {
    if (nums.indexOf(i) !== -1) {
      temp.push(i);
    } else {
      const text =
        temp.length > 1 ? `${temp[0]}->${temp[temp.length - 1]}` : `${temp[0]}`;
      if (temp.length > 0) list.push(text);
      temp.length = 0;
    }
  }
  return list;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
