function checkDigitInName (name) {
    if (typeof name !== 'string') {
        return 'Invalid input';
    }

    for (let i = 0; i < name.length; i = i + 1) {
        let character = name[i];
        if (character >= '0' && character <= '9') {
            return true;
        }
    }

    return false;
}

console.log (checkDigitInName('Arif Hossain'));
console.log (checkDigitInName('Ar1f H0ssa1n'));
console.log (checkDigitInName(123));


// Another way using Regular Expression (regEx)

function digitCheckInName (anotherWay) {
    if (typeof anotherWay !== 'string') {
        return 'Invalid input';
    }

    const numCheck = /\d/.test(anotherWay);
    return numCheck;
}

console.log (digitCheckInName('Arif Hossain'));
console.log (digitCheckInName('Ar1f H0ssa1n'));
console.log (digitCheckInName(123));