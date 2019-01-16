function isTandemRepeat(inputString: string): boolean {
  if(inputString.length % 2 !== 0) return false;
  const length = inputString.length / 2;
  return inputString.slice(length) === inputString.slice(0,length); 
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
