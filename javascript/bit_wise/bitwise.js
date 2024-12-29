// AND
// 0 & 0 = 0;
// 0 & 1 = 0;
// 1 & 1 = 1;

// OR
// 0 | 0 = 0;
// 0 | 1 = 1;
// 1 | 1 = 1;

// XOR
// 0 ^ 0 = 1;
// 0 ^ 1 = 1;
// 1 ^ 1 = 0;

console.log((1).toString());
console.log((1).toString(2));
console.log((2).toString(2));
console.log((52).toString(2));
console.log(parseInt("1110000110", 2));
// 0b in the front represents it is a binary format
console.log((0b1110000110).toString(10));
console.log((0b1110000110).toString(16)); // converts to hexa
console.log((0b1110000110).toString(8)); // converts to octa

console.log(0 & 1); // 00 & 01 => 00 => 0
console.log(0 | 1); // 00 | 01 => 01 => 1
console.log(1 ^ 2); // 01 ^ 10 => 11 => 3
console.log(9 << 2); // 1001 << 2 => 100100 => 36
console.log(9 >> 2); // 1001 >> 2 => 10 => 2
