function sameFrequency(num1, num2) {
  let tempObject = {};
  let string1 = num1.toString();
  let string2 = num2.toString();
  if (string1.length !== string2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    tempObject[string1[i]] = (tempObject[string1[i]] || 0) + 1;
  }
  for (let i = 0; i < string2.length; i++) {
    if (!tempObject[string2[i]]) {
      return false;
    } else {
      tempObject[string2[i]] -= 1;
    }
  }
  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
