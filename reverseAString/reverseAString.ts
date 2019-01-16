function reverseAString(str: string): string {
    const list = str.split('');
    list.reverse();
    return list.join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));