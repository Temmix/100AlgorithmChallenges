function longestDigitsPrefix(inputString: string): string {
    if(!inputString) return null;
    
    let digits = '';
    const allowedDigits = '0123456789';
    for(let i = 0; i < inputString.length; i++){
        if(allowedDigits.indexOf(inputString[i]) !== -1) digits += inputString[i];
        else break; 
    } return digits;
}

console.log(longestDigitsPrefix('123aa1'));