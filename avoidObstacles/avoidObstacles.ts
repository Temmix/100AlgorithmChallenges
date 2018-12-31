function avoidObstacles(inputArray: number[]): number {
    inputArray.sort((a,b) => a - b);
    const min = Math.min(...inputArray);
    const max = Math.max(...inputArray);
    const list = [];
    for(let i = 1; i < max; i++){
        if(inputArray.indexOf(i) === -1 && min < i) list.push(i);
    }
    console.log(list)
    return Math.min(...list);
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));