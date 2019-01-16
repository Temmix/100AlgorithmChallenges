function largestOfFour(nums: number[][]): number[] {
    const map = {};
    for(let i = 0; i < nums[0].length; i++){
        let index = nums[0][i] > nums[1][i] 
                ? nums[0][i] > nums[2][i] 
                    ? nums[0][i] > nums[3][i] 
                        ? 0 : 3
                    : nums[2][i] > nums[3][i]
                        ? 2 : 3
                : nums[1][i] > nums[2][i] 
                    ?  nums[1][i] > nums[3][i] 
                        ?  1 : 3
                    :  nums[2][i] > nums[3][i] 
                        ? 2 : 3;
        if(!map[index]) map[index] = 1;
        else map[index] = map[index] + 1;
    } 
    let values = Object.keys(map).map(x => map[x]); 
    let index = values.indexOf(Math.max(...values));
    //let index = Object.values(map).indexOf(Math.max(...Object.values(map)));
    return nums[+Object.keys(map)[index]];
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [1000000, 1001, 857, 1], [13, 35, 18, 26], [32, 35, 97, 39]]));