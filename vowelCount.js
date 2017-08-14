function vowelCount (str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].includes(vowels[j])) {
        count ++
      }
      if(typeof str !== 'string') {
        return 'Please input a string.'
      }
      if (str === undefined) {
        return false;
      }
    }
  }
  return count;
}

module.exports = {
  vowelCount
};
