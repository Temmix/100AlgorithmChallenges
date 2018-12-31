function convertString(s: string, t: string): boolean {
    let lastIndex = -1;
    for(let i = 0; i < t.length; i++ ){
        const index = s.lastIndexOf(t[i]);
        if(lastIndex > index) return false;
        lastIndex = index;
    }
    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
