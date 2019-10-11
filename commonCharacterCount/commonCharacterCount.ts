function commonCharacterCount(s1: string, s2: string): number {
  let sum = 0;
  let list = s2.split("");
  for (let i = 0; i < s1.length; i++) {
    const index = list.indexOf(s1[i]);
    if (index !== -1) {
      sum++;
      list.splice(index, 1);
    }
  }
  return sum;
}

// 3 More Looops
function commonCharacterCount2(s1: string, s2: string): number {
  let sum = 0;
  let map1 = {},
    map2 = {};
  s1.split("").forEach(x => (map1[x] = (map1[x] || 0) + 1));
  s2.split("").forEach(x => (map2[x] = (map2[x] || 0) + 1));
  Object.keys(map1).forEach(s => {
    if (map1[s] <= map2[s]) sum += map1[s];
    else if (map1[s] >= map2[s]) sum += map2[s];
  });
  return sum;
}

console.log(commonCharacterCount2("aabcc", "adcaa"));
