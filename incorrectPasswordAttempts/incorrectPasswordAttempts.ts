function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let index = attempts.indexOf(passcode);
    return index !== -1 && index <= 9;
}

console.log(incorrectPasscodeAttempts('1111', ["4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));