// Insertion Sort

function insertionSort(arr) {
  // i -> this is our current pointer (primarily used to traverse the data)
  // j -> this is our previous pointer that is to the left of i by one position
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

// TESTING

console.log(insertionSort([2, 8, 4, 1, 6]));
