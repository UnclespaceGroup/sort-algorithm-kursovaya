import React from 'react'
import css from './SectionArraysList.module.scss'
import { findMax, findMin } from 'utils/findFunctions'

const SectionArraysList = ({ array = [], onClick }) => {
  const maxValue = findMax(array)
  const minValue = findMin(array)
  const range = Math.abs(maxValue) + Math.abs(minValue)

  const getValue = value => {
    return (value + Math.abs(minValue)) * 100 / range
  }

  return array.length ?
    <div className={css.container}>
      <div className={css.row}>
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
    : <button className={'btn-generate'} onClick={onClick}>Сгенерировать</button>
}
export default React.memo(SectionArraysList)
