function sumOddFibonacciNums(num: number): number { 
    let sum = 0;
    fib(num).forEach(s => {
        sum += s%2 !== 0 ? s : 0;
    });
    return sum;
}

function fib(value){ 
    const list = [0,1,1];  
    while(true){ 
        let length = list.length;
        let x = list[length - 1] + list[length - 2];  
        if(x >= value) break;
        else list.push(x)
    } return list;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));