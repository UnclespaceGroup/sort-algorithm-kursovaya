import React from 'react'
import css from './Preloader.module.scss'
import loader from 'static/loader.svg'

const Preloader = () => (
  <img src={loader}
       alt={'loader'}
    className={css.loader} />
)
export default Preloader
