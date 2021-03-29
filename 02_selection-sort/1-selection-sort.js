function selectionSort(input) {
  const arr = [...input]
  let newArr = []
  let max = null
  let maxIndex = null
  while (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (max === null) {
        max = arr[i]
      }
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
      if (i === arr.length - 1) {
        newArr.push(max)
        arr.splice(maxIndex, 1)
        max = null
        maxIndex = null
      }
    }
  }
  return newArr
}

const list = [9, 2, 1, 10, 23, 3, 0, 7]

console.log(selectionSort(list))
