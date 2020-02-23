import swap from 'utils/swap'

const cocktailSort = (array) => {
  let left = 0
  let firstSwap = 0
  let right = array.length - 1
  let lastSwap = right
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        lastSwap = i
      }
    }
    right = lastSwap
    for (let i = right; i > left; i--) {
      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1)
        firstSwap = i
      }
    }
    left = firstSwap
  }
  return array
}
export default cocktailSort

