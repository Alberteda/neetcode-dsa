// Foundational two-way search using the divide and conquer paradigm
// Finding the maximum element in an array

(function twoWaySearch() {
  function findMaximumElement(arr) {
    if (arr.length == 0) return null;

    return findMax(0, arr.length - 1, arr);
  }

  function findMax(i, j, arr) {
    if (i === j) {
      return arr[i];
    }
    if (j - 1 === 1) {
      return Math.max(arr[i], arr[i + 1]);
    }

    mid = Math.floor((i + j) / 2);

    let leftMax = findMax(i, mid, arr);
    let rightMax = findMax(mid + 1, j, arr);

    return Math.max(leftMax, rightMax);
  }

  let arrTest = [3, 4, 5, 3, 7, 9, 3, 2, 45];

  console.log(findMaximumElement(arrTest));
})();

// Foundational three-way search using the divide and conquer paradigm
// Finding the maximum element in an array

(function threeWaySearch() {
  function findMaximumElement(arr) {
    if (arr.length === 0) return null;

    return findMax(0, arr.length - 1, arr);
  }

  function findMax(i, j, arr) {
    if (i === j) return arr[i];
    if (j - 1 === 1) {
      return Math.max(arr[i], arr[i + 1]);
    }
    if (j - 1 === 2) {
      return Math.max(arr[i], arr[i + 1], arr[i + 2]);
    }

    let rangeSize = j - i + 1;
    // How many elements per third
    let thirdSize = Math.floor(rangeSize / 3);
    let mid1 = i + thirdSize - 1;
    let mid2 = i + 2 * thirdSize - 1;

    let leftPortion = findMax(i, mid1, arr);
    let middlePortion = findMax(mid1 + 1, mid2, arr);
    let rightPortion = findMax(mid2 + 1, j, arr);

    return Math.max(leftPortion, middlePortion, rightPortion);
  }

  let arrTest = [3, 499, 5, 3, 74, 9, 3, 2, 45];

  console.log(findMaximumElement(arrTest));
})();
