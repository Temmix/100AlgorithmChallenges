function findEmailDomain(address: string): string {
    if(!address) return null;
    const last = address.lastIndexOf('@');
    return address.slice(last + 1);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
