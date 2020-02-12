import React, { useState } from 'react'
import SectionArraysList from 'components/SectionArraysList/SectionArraysList'
import { arrayGenerator } from 'utils/arrayGenerator'
import InputCount from 'components/InputCount/InputCount'
import css from './ContainerGenerateArray.module.scss'
import Padding from 'components/Padding/Padding'

const ContainerGenerateArray = ({ setArray, array = [] }) => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [length, setLength] = useState(1000)
  const getGenerateArray = async () => {
    const _array = await arrayGenerator(length, min, max)
    setArray(_array)
  }
  return (
    <>
      <div className={css.form}>
        <div >
          <InputCount
            min={0}
            max={10000}
            onChange={setLength}
            label={'Длина массива'}
            value={length}
            step={1000}
          />
          <InputCount
            min={-1000}
            max={1000}
            onChange={setMin}
            label={'Нижний предел'}
            value={min}
          />
          <InputCount
            min={-1000}
            max={1000}
            onChange={setMax}
            label={'Верхний предел'}
            value={max}
          />
        </div>
        <Padding value={24} />
        <button className={'btn-generate'} onClick={() => getGenerateArray()}>Сгенерировать</button>
      </div>

      <h2>Исходный массив</h2>
      {(array.length > 0) && <SectionArraysList
        array={array}
        onClick={() => getGenerateArray()}
      />}
    </>
  )
}
export default React.memo(ContainerGenerateArray)
