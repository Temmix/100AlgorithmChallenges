function areSimilar(a: number[], b: number[]): boolean {
    let sumA = 0;
    let sumB = 0;
    a.forEach(x => sumA += x);
    b.forEach(x => sumB += x);
    return sumA === sumB;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
