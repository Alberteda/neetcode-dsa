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

  // charCount("abccdwggjjjaaadsc-$3#");
})();

/* 

FREQUENCY PATTERN

*/

console.log("\n\nFREQUENCY PATTERN\n" + "*".repeat(100));

function validSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (var val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (var val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true && console.log(`VALID SQUARE RELATION FOR --->  [${arr1}] & [${arr2}])}`);
}

// validSquare([3, 1, 2, 2, 4, 3], [4, 1, 4, 16, 9, 9]);
console.log(`- Valid Square comparison between two arrays with numbers`);

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter = {};

  for (let char of str1) {
    frequencyCounter[char] = ++frequencyCounter[char] || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // if (!frequencyCounter[letter]) {
    //   return false;
    // } else {
    //   return frequencyCounter[letter]--;
    // }

    frequencyCounter[letter] = --frequencyCounter[letter] || 0;
  }

  console.log(frequencyCounter);
  return true;
}

// console.log(validAnagram("sitas", "tisas"));
console.log(`- Anagram problems`);

/* 

MULTIPLE POINTER PATTERN

*/

console.log("\n\nMULTIPLE POINTER PATTERN\n" + "*".repeat(100));

function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];

    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(`- Sum to zero between two pairs of elements in an array`);

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  let right = left + 1;

  while (right < arr.length) {
    if (arr[right] === arr[left]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }

  console.log(arr);
}
console.log(`- Counting unique values`);
countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);
