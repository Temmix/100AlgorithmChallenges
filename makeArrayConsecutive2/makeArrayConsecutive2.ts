function makeArrayConsecutive2(statues: number[]): number {
    const max = Math.max(...statues);
    const min = Math.min(...statues);
    let count = 0;
    for(let i = min; i <= max; i++){
        if(statues.indexOf(i) !== -1) count++;
    } return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));