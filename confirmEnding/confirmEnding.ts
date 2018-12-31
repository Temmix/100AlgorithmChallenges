function confirmEnding(str: string, target: string) {
    return str.endsWith(target);
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));