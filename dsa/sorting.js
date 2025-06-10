// Insertion Sort

let t1 = performance.now();

(function insertionSort(arr) {
  let originalArr = [...arr];
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

  console.log(`The insertion sort of [${originalArr}] ---> ${arr}`);
})([2, 8, 4, 1, 6]);

let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

/* 

  - split the array into two equal parts 
  - keep splitting the left and right till you meet a base 
  - at that base (1=j) apply the comparison for each array?


*/
