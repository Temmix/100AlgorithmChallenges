function digitDegree(n: number): number {
  if(n.toString().length <= 1) return 0;
  return hdigitDegreeHelper(n.toString(), 0);
}

function hdigitDegreeHelper(n: string, counter: number){
    let sum = 0;
    const list = n.split('');
    list.forEach(x => sum += +x);
    const result = sum.toString();
    counter++; 
    if(result.length === 1) return counter;
    else return hdigitDegreeHelper(result, counter);
}

console.log(digitDegree(5));
console.log(digitDegree(1099));
console.log(digitDegree(91));