function palindromeRearranging(inputString: string): boolean {
    const map = {};
    const list = inputString.split('');
    list.forEach(x => map[x] = (map[x] || 0) + 1); 
    return Object.keys(map).filter(x => map[x] === 1).length <= 1;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aabbop'));