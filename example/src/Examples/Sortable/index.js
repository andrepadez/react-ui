import React from 'react'
import './sortable.scss'

import { Sortable } from 'react-ui'

const SortableExample = () => {
  const onReorder = (order) => {
    console.log('onReorder', order)
  }
  return (
    <div className='container'>
      <h1>Sortable</h1>
      <Sortable onReorder={onReorder}>
        {ITEMS.map((item) => (
          <div key={item.id} className='item'>
            {item.label}
          </div>
        ))}
      </Sortable>
    </div>
  )
}

const ITEMS = [
  { label: 'Item 1', id: '322342' },
  { label: 'Item 2', id: '23423' },
  { label: 'Item 3', id: '345345' },
  { label: 'Item 4', id: '3242342' },
  { label: 'Item 5', id: '8687686' },
  { label: 'Item 6', id: '67576576' }
]

export default SortableExample
