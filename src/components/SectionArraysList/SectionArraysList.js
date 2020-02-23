import React, { useState } from 'react'
import css from './SectionArraysList.module.scss'
import { findMax, findMin } from 'utils/findFunctions'
import InputTabs from 'components/InputTabs/InputTabs'
import Padding from 'components/Padding/Padding'

const SectionArraysList = ({ array = [], onClick, btnText = 'Сгенерировать' }) => {
  const viewList = [ 'Полный вид', 'Подробный вид' ]
  const [ view, setView ] = useState(viewList[0])
  const maxValue = findMax(array)
  const minValue = findMin(array)
  const range = Math.abs(maxValue) + Math.abs(minValue)

  const getValue = value => {
    return (value + Math.abs(minValue)) * 100 / range
  }

  const fullList = view === viewList[0]

  return (array.length > 0) ?
    <div className={css.container}>
      <Padding value={24} />
      <InputTabs
        tabs={viewList}
        value={view}
        onChange={setView}
      />
      <div className={fullList ? css.wrapperFull : css.wrapper}>
        <ul>
          {
            Array.isArray(array) && array.map((item, key) => (
              <li key={key} className={css.item}>
                <div className={css.top}>
                  <div className={css.column} style={{ height: `${getValue(item)}%` }} />
                </div>
                <div className={css.count}>{item}</div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    : <button className={'btn-generate'} onClick={onClick}>{btnText}</button>
}
export default React.memo(SectionArraysList)
