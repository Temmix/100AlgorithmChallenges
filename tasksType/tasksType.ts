function tasksTypes(deadlines: number[], day: number): number[] {
    let today = 0, upComing = 0, later = 0;
    deadlines.forEach((x,i) => {
        if(x <= day) today++;
        else if(x > day && x <= (day + 7)) upComing++;
        else later++;
    });  return [today, upComing, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
