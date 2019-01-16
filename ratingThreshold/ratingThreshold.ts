function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let list = [];
    for(let i = 0; i < ratings.length; i++){
        let sum  = 0;
        ratings[i].forEach(x => sum += x);
        if((sum/ratings[i].length) < threshold) list.push(i)
    }   return list;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));