import React, { useState } from 'react'
import 'App.scss'
import ContainerBubbleSort from 'containers/ContainerSort/ContainerSort'
import Layout from 'components/Layout/Layout'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Tabs from 'components/Tabs/Tabs'
import tabs from 'constants/tabs'
import Padding from 'components/Padding/Padding'
import bubbleSort from 'algorithms/bubbleSort'
import ContainerGenerateArray from 'containers/ContainerGenerateArray/ContainerGenerateArray'

function App () {
  const [ array, setArray ] = useState([])
  return (
    <BrowserRouter>
      <Layout>
        <Padding value={80} />
        <ContainerGenerateArray array={array} setArray={setArray} />
        <Padding value={24} />
        <Tabs tabs={tabs} />
        <Switch>
          <Route exact path='/' render={() =>
            <ContainerBubbleSort
              array={array}
              sortFunction={bubbleSort}
            />}
          />
        </Switch>
      </Layout>
      <Padding value={120} />
    </BrowserRouter>
  )
}

export default App
