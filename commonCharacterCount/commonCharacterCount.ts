function commonCharacterCount(s1: string, s2: string): number {
   let sum = 0;
   let list = s2.split('');
    for(let i = 0; i < s1.length; i++){
        const index = list.indexOf(s1[i]); 
        if(index !== -1){
            sum++;
            list.splice(index,1); 
        }
    } 
   return sum;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));