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

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

Assumptions:

- 
That both integers are positive and are greater than 0

*/

function sameFrequency(a, b) {
  let num1 = String(a);
  let num2 = String(b);

  if (num1.length !== num2.length) return ` ${num1} AND ${num2} not the same sizes`;

  const frequencyCounter = {};
  const frequencyCounter2 = {};

  for (let char of num1) {
    frequencyCounter[char] = ++frequencyCounter[char] || 1;
  }

  for (let char of num2) {
    frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
  }

  console.log(frequencyCounter);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

// console.log(sameFrequency(128, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

/*

***************************************************************
 */

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

/* 

SLIDING WINDOW

*/

console.log("\n\nSLIDING WINDOW PATTERN\n" + "*".repeat(100));

function maxSum(arr, num) {
  if (num > arr.length) return null;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  console.log(maxSum);
  return maxSum;
}
console.log(
  `- Scoping an array and trying to do something with the sub-arrays or sub-values\n and being able to filter out/in values as the window slides. `
);

maxSum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 2);

/* 

  DIVIDE AND CONQUER 

*/

console.log("\n\nDIVIDE AND CONQUER\n" + "*".repeat(100));
console.log("- Used in large data sets for mostly sorting related issues");
