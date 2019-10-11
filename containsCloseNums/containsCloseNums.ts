function containsCloseNums(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    const list = [];
    nums.map((x, i) => {
      if (x === nums[i]) list.push(i);
    });
    let previous;
    if (
      list.some(x => {
        if (previous && Math.abs(previous - x) === k) return true;
        previous = x;
      })
    )
      return true;
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 1, 4, 10, 5, 2, 7, 8, 2], 4));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
