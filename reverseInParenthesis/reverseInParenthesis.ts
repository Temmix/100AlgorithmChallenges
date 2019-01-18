function reverseInParentheses(inputString: string): string {
    let first = undefined;
    let second = undefined;
    const list = inputString.split('');
    let counter = 0; 
    while(counter < 10){
        counter++
        if(list.indexOf(')') === -1) break;
        for(let i = 0; i < list.length; i++){ 
            if(first === undefined && list[i] === '('){
                first = i;
                second = undefined;
            }
            else if(first !== undefined && list[i] === '('){
                first = i;
                second = undefined;
            } 
            else if(second === undefined && first !== undefined && list[i] === ')'){
                second = i;  
            } 
            if(first !== undefined && second !== undefined) break;
        }  
        list.splice(first, (++second - first), ...parenthesisRemover(list.slice(first, second).join('')));
        first = undefined; second = undefined;
   } 
   return list.join('');
}

function parenthesisRemover(value){ 
    console.log(value)
    if(!value) return null;
    return value.replace(')','').replace('(','').split('').reverse();
}
console.log(undefined === undefined)
console.log(reverseInParentheses("(bar)")) ;
console.log(reverseInParentheses("foo(bar)baz")); 
console.log(reverseInParentheses("foo(bar)baz(blim)")); 
console.log(reverseInParentheses("foo(bar(baz))blim")); 
