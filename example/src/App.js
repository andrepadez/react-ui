import React from 'react'
import 'react-ui/dist/index.css'
import './App.scss'
import Sortable from './Examples/Sortable'
import Accordion from './Examples/Accordion'

const App = () => {
  return (
    <>
      <div className='example'>
        <Sortable />
      </div>
      <div className='example'>
        <Accordion />
      </div>
    </>
  )
}

export default App
