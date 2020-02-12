import React from 'react'
import css from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className={css.layout}>{children}</div>
)
export default Layout
