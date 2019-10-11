function areSimilar(a: number[], b: number[]): boolean {
  let map = {};
  a.forEach(x => (map[x] = (map[x] || 0) + 1));
  b.forEach(x => (map[x] = (map[x] || 0) + 1));
  return (
    Object.keys(map)
      .map(x => map[x])
      .filter(x => x % 2 != 0).length === 0
  );
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 4]));
console.log(areSimilar([1, 2, 2], [3, 1, 1]));
