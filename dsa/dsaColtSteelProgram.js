(function getCharCountForString(str) {
  const charCount = (str) => {
    let obj = {};

    for (char of str) {
      if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
        obj[char] = ++obj[char] || 1;
      }
    }

    console.log(obj);
  };

  const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if ((code > 64 && code <= 90) || (code > 96 && code <= 122) || (code > 47 && code <= 57)) {
      return true;
    }
    return false;
  };

  charCount("abccdwggjjjaaadsc-$3#");
})();

/*  */
