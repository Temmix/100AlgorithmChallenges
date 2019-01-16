function integerToStringOfFixedWidth(number: number, width: number): string {
    let response = '';
    let mapper = number.toString().split(''); 
    for(let i = 0; i < width; i++ ){
        response = mapper.length > i ? response + mapper[i] : '0' + response
    }
    return response;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
