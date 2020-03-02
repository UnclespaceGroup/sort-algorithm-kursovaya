import React, { useState } from 'react'
import SectionArraysList from 'components/SectionArraysList/SectionArraysList'
import { arrayGenerator } from 'utils/arrayGenerator'
import InputCount from 'components/InputCount/InputCount'
import css from './ContainerGenerateArray.module.scss'
import Padding from 'components/Padding/Padding'
import InputTabs from 'components/InputTabs/InputTabs'

const ContainerGenerateArray = ({ setArray, array = [] }) => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [length, setLength] = useState(1000)

  const getGenerateArray = async () => {
    const _array = await arrayGenerator(length, min, max)
    setArray(_array)
  }

  const isArray = array.length > 0

  return (
    <>
      <div className={css.form}>
        <h2>
          Генерация массива
        </h2>
        <div>
          <hr />
          <InputTabs
            onChange={setLength}
            label={'Длина массива'}
            value={length}
            tabs={[
              100, 1000, 10000, 100000
            ]}
          />
          <hr />
          <InputCount
            min={-1000}
            max={1000}
            onChange={setMin}
            label={'Нижний предел'}
            value={min}
          />
          <hr />
          <InputCount
            min={-1000}
            max={1000}
            onChange={setMax}
            label={'Верхний предел'}
            value={max}
          />
        </div>
        <Padding value={24} />
      </div>

      {!isArray && <button className={'btn-generate'} onClick={() => getGenerateArray()}>
        Сгенерировать
      </button>}

      {(isArray) &&
      <>
        <h2 className={'flex'}>
          Исходный массив
          <button className={'btn-generate'} onClick={() => getGenerateArray()}>
            Сгенерировать заново
          </button>
        </h2>
        <SectionArraysList
          array={array}
          onClick={() => getGenerateArray()}
        />
      </>}
      <Padding value={24} />
    </>
  )
}
export default ContainerGenerateArray
