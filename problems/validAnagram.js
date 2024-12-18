function validAnagram(value1, value2) {
  const testObj1 = {};
  const testObj2 = {};
  //   const testValue1 = value1.toLowerCase().split("");
  //   const testValue2 = value2.toLowerCase().split("");
  const testValue1 = value1;
  const testValue2 = value2;
  if (testValue1.length === 0 && testValue2.length === 0) {
    return true;
  }
  if (testValue1.length !== testValue2.length) {
    return false;
  }
  for (let i = 0; i < testValue1.length; i++) {
    testObj1[testValue1[i]] = (testObj1[testValue1[i]] || 0) + 1;
  }
  for (let i = 0; i < testValue2.length; i++) {
    testObj2[testValue2[i]] = (testObj2[testValue2[i]] || 0) + 1;
  }
  for (const key in testObj1) {
    console.log(key, testObj1[key], testObj2[key]);
    if (!key in testObj2) {
      return false;
    }
    if (testObj1[key] !== testObj2[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
