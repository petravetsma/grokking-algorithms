function binarySearchRecursion(item, list, start = 0, end = list.length - 1) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let guess = list[mid]
    if (guess === item) {
      return mid
    }
    if (item > guess) {
      return binarySearchRecursion(item, list, mid + 1, end)
    }
    else {
      return binarySearchRecursion(item, list, start, mid - 1)
    }
  }
  return null
}

const list = [1, 3, 5, 7, 9]

console.log(binarySearchRecursion(1, list)); // 0
console.log(binarySearchRecursion(3, list)); // 1
console.log(binarySearchRecursion(9, list)); // 4
console.log(binarySearchRecursion(1221, list)); // null
