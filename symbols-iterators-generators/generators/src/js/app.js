function canIterate(obj) {
    if (!obj) return false;
    else return !!(obj[Symbol.iterator]);
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true