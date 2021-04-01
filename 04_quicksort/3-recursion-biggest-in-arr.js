function biggestNumber(arr) {
  if (arr.length === 2) {
    if (arr[0] > arr[1]) return arr[0]
    return arr[1]
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) arr.pop()
  else arr.splice(arr.length - 2, 1)
  return biggestNumber(arr)
}

console.log(biggestNumber([1,9,2,3,4,5])) // 5
