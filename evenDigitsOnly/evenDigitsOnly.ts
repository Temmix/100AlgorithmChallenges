function evenDigitsOnly(n: number): boolean {
    const list = n.toString().split('');
    return list.every(x => (+x)%2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));