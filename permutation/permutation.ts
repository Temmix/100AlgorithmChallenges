const permutation = (a: string[]) => {
    let response = [];
    response.push(a);

    for(let i = 0; i < a.length; i++){
        let inner = [];
        inner.push(a[i]);
        for(let x = 1; x < a.length; x++){
            inner.push(a[x]);
        }
        response.push(inner);
         
    }
return response;
}

console.log(permutation(['c','a','t']))