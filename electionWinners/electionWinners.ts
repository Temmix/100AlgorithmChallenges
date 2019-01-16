function electionsWinners(votes: number[], k: number): number {
    if(!votes || !votes.length) return -1; 
    const max =  Math.max(...votes);
    let count = 0;
    for(let i = 0; i < votes.length; i++){
        if((votes[i] + k) > max) count++;
    }
    return count
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([7, 3, 5, 2], 4));
console.log(electionsWinners([2, 3, 15, 2], 13));
console.log(electionsWinners([12, 13, 15, 11], 4));