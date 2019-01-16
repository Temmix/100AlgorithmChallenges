function lateRide(n: number): number {
    const min= n % 60;
    const hrx = Math.floor(n / 60);
    let sum = 0;
    hrx.toString().split('').forEach(x => sum += +x);
    min.toString().split('').forEach(x => sum += +x);
    return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
