import React, { useState } from 'react'
import 'App.scss'
import ContainerSort from 'containers/ContainerSort/ContainerSort'
import Layout from 'components/Layout/Layout'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Tabs from 'components/Tabs/Tabs'
import tabs from 'constants/tabs'
import Padding from 'components/Padding/Padding'
import bubbleSort from 'algorithms/bubbleSort'
import ContainerGenerateArray from 'containers/ContainerGenerateArray/ContainerGenerateArray'
import { COCKTAIL_SORT, BUBBLE_SORT, QUICK_SORT, MERGE_SORT, HEAP_SORT, GNOME_SORT } from 'constants/routes'
import cocktailSort from 'algorithms/cocktailSort'
import quickSort from 'algorithms/quickSort'
import mergeSort from 'algorithms/mergeSort'
import heapSort from 'algorithms/heapSort'
import gnomeSort from 'algorithms/naturalSort'

function App () {
  const [array, setArray] = useState([])
  const isArray = array.length > 0

  return (
    <BrowserRouter>
      <Layout>
        <Padding value={80} />
        <ContainerGenerateArray
          array={array}
          setArray={setArray}
        />
        <Padding value={24} />
        {isArray && <Tabs tabs={tabs} />}
        <Padding value={80} />

        {isArray &&
        <Switch>
          <Route exact path={BUBBLE_SORT} render={() =>
            <ContainerSort
              array={array}
              sortFunction={bubbleSort}
            />}
          />
          <Route exact path={COCKTAIL_SORT} render={() =>
            <ContainerSort
              array={array}
              sortFunction={cocktailSort}
            />}
          />
          <Route exact path={QUICK_SORT} render={() =>
            <ContainerSort
              array={array}
              sortFunction={quickSort}
            />}
          />
          <Route exact path={MERGE_SORT} render={() =>
            <ContainerSort
              array={array}
              sortFunction={mergeSort}
            />}
          />
          <Route exact path={HEAP_SORT} render={() =>
            <ContainerSort
              array={array}
              sortFunction={heapSort}
            />}
          />
          <Route exact path={GNOME_SORT} render={() =>
            <ContainerSort
              array={array}
              sortFunction={gnomeSort}
            />}
          />
        </Switch>}
      </Layout>
      <Padding value={120} />
    </BrowserRouter>
  )
}

export default App
