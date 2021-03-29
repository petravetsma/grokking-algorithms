
function binarySearch(item, arr) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    guess = arr[mid]
    if (guess === item) {
      return mid
    } else if (item < guess) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return null
}

const list = [1, 3, 5, 7, 9]

console.log(binarySearch(1, list)); // 0
console.log(binarySearch(3, list)); // 1
console.log(binarySearch(9, list)); // 4
