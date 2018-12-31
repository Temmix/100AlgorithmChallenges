function addTwoDigits(n: any): number {
    let list = n.toString().split('');
    let sum = 0;
    list.forEach(x => { sum += parseInt(x) });
    return sum;
}

 console.log(addTwoDigits(29));
 console.log(addTwoDigits(2990245));