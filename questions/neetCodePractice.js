// finding duplicate numbers in an array

const findDuplicateNumbers = (arr) => {
  const filteredArray = new Set();

  for (let arrNum of arr) {
    if (filteredArray.has(arrNum)) {
      return true;
    } else {
      filteredArray.add(arrNum);
    }
  }
};

// finding anagrams

const findingAnagrams = (str1, str2) => {
  // check if both strings provided are of the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // array to represent all 26 letters of the alphabet (25, because the array index starts from 0)
  // and we want to fill all the elements to zero
  let arr = new Array(26).fill(0);

  for (let index = 0; index < str1.length; index++) {
    arr[str1.charCodeAt(index) - 97]++;
    arr[str2.charCodeAt(index) - 97]--;
  }

  if (arr.every((num) => num === 0)) {
    return true;
  }

  return false;
};

const findTwoSum = (arr, target) => {
  let map = new Map();

  for (let index = 0; index < arr.length; index++) {
    if (map.has(arr[index])) {
      return consol.log(`sum = [${map.get(arr[index])}, ${index}] OR [ ${index}, ${map.get(arr[index])}]`);
    } else {
      map.set(arr[index], index);
    }
  }
};

// TESTING

var str1 = "plays";

var str2 = "yalpe";

console.log(findingAnagrams(str1, str2));
