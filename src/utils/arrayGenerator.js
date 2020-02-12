/**
 * Функция генерирования рандомного массива
 * @length - Длина массива
 * @min, @max - диапозон возможных значений
 */
export const arrayGenerator = (length, min = 0, max = 100) => {
  let _array = []
  for (let i = 0; i < length; i++) {
    let rand = min + Math.random() * (max + 1 - min)
    _array.push(Math.floor(rand))
  }
  return _array
}
