function findClosestPair(numbers: number[], sum: number): number {
    if(!numbers || !numbers.length ) return -1;
    const list = [];
    for(let i = 0; i < numbers.length; i++){
        for(let x = i + 1; x < numbers.length; x++){
            if(numbers[i] + numbers[x] === sum)
                list.push(x - i);
        }
    }
   return list.length ? Math.min(...list) : -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));