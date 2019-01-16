function minimalNumberOfCoins(coins: number[], price: number): number {
    let helper = 0; 
    const max = Math.max(...coins);
    let steps = 0;
    let value = price % max; 
    steps = Math.floor(price / max);
    if(value === 0) return steps; 

    coins.slice(0, coins.length - 1).forEach((x) => {
        if(value % x === 0)
        helper = value / x;
    });
    return steps + helper;
    }

console.log(minimalNumberOfCoins([1, 2, 10], 28));