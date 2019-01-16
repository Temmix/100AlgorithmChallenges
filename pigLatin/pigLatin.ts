function pigLatin(str: string): string {
    const vowels = 'aeiou'.split('');
    let list = str.split('');
    let test = str.split('');
    if(vowels.indexOf(list[0]) === -1) return `${str}way`;
    let suffix = '';
    for(let i = 0; i < test.length; i++){ 
        if(vowels.indexOf(test[i]) !== -1){ 
            suffix += test[i]; 
            list = list.splice(1); 
        } else {
            break;
        }
    } 
    return `${list.join('')}${suffix}ay`;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
