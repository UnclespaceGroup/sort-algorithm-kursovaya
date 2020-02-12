export const findMin = (array = []) => {
  let a = 10000000000
  array.forEach(item => {
    if (item < a) {
      a = item
    }
  })
  return a
}

export const findMax = (array = []) => {
  let a = -10000000000
  array.forEach(item => {
    if (item > a) {
      a = item
    }
  })
  return a
}
