function addToZero(arr, num) {
  let obj = {}
  let diff

  for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i]

    if (obj[diff]) {
      return true
    } else {
      obj[arr[i]] = true
    }
  }
  return false
}
console.log(addToZero([], 0))
console.log(addToZero([1], 0))
console.log(addToZero([1, 2, 3], 0))
console.log(addToZero([1, 2, 3, -2], 0))