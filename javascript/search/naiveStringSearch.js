function naiveStringSearch(text, char) {
  let count = 0;
  if (text.length < char.length) return count;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char[0]) {
      for (let j = 0; j < char.length; j++) {
        if (text[i + j] !== char[j]) break;
        if (j === char.length - 1) {
          count++;
        }
      }
    }
  }
  console.log(count);
  return count;
}

naiveStringSearch("lolie lolie", "lol");
