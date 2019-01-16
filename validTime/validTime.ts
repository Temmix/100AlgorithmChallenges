function validTime(time: string): boolean {
    const list = time.split(':');
    return +list[0] < 24 && +list[1] < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));