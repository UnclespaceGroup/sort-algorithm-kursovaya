const merge = (arrFirst, arrSecond) => {
  const arrSort = []
  let i = 0
  let j = 0
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(
      (arrFirst[i] < arrSecond[j]) ?
        arrFirst[i++] : arrSecond[j++]
    )
  }
  return [
    ...arrSort,
    ...arrFirst.slice(i),
    ...arrSecond.slice(j)
  ]
}

const mergeSort = (array) => {
  if (!array || !array.length) {
    return null
  }
  if (array.length <= 1) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const arrayLeft = array.slice(0, middle)
  const arrayRight = array.slice(middle)
  return merge(mergeSort(arrayLeft), mergeSort(arrayRight))

}
export default mergeSort
