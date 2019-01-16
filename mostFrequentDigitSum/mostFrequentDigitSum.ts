function mostFrequentDigitSum(n: number): number {
    let iterator = helper(n);
    let numb = n;
    const list = [];  
    while(true){
        list.push(iterator);
        numb = numb - iterator;
        iterator = helper(numb)
        if(iterator === 0) break;
    } 
    let map = {};
    let highest = {name: 0 , count: 0};
    list.forEach(x => {
        if(!map[x]) {
            map[x] = { name: x, count: 1} 
             if(map[x].count > highest.count)
             highest = map[x];
        }
        else {
            map[x] = { name: x, count: map[x].count + 1}
            if(map[x].count > highest.count)
            highest = map[x]
        }
    });
    return highest.name; 

}

function helper(value){
    let sum = 0;
    value.toString().split('').forEach(x => sum += +x); 
    return sum;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));