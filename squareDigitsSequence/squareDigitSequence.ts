function squareDigitsSequence(a0: number): number {
    const list = [];
    let input = a0;
    let counter = 0;
    list.push(input);
    while(true){
        counter++; 
        let response = helper(input);
        if(list.indexOf(response) === -1){
            list.push(response);
            input = response;
        } 
        else break;
    } 
    return ++counter;
}

function helper(value){
    const multiplier = 2;
    const list = value.toString().split('');
    let sum = 0; 
    for(let i = 0; i < list.length;i++){
        if(i < 3) sum += ((+list[i]) ** multiplier);
        else sum += +(list[i] + multiplier);
    }  
    return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));