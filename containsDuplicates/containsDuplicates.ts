function containsDuplicates(a: number[]): boolean {
   return !(Array.from(new Set(a).values()).length === a.length);
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
