import React from 'react'

const Sortable = ({ children, onReorder }) => {
  let container = null
  let dragging = null

  const dragStart = (ev) => {
    dragging = ev.target
    dragging.classList.add('dragging')
  }

  const dragEnd = (ev) => {
    dragging.classList.remove('dragging')
    dragging = null
    const order = Array.from(container.querySelectorAll('.sortable-item')).map(
      (elem) => elem.dataset.key
    )
    onReorder && onReorder(order)
  }

  const dragOver = (ev) => {
    ev.preventDefault()
    const afterElement = getAfterElement(ev.clientY)
    if (afterElement) {
      container.insertBefore(dragging, afterElement)
    } else {
      container.appendChild(dragging)
    }
  }

  const getAfterElement = (y) => {
    const items = Array.from(
      container.querySelectorAll('.sortable-item:not(.dragging)')
    )

    return items.reduce(
      (closest, element) => {
        const box = element.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset, element }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY
      }
    ).element
  }

  return (
    <div
      ref={(ref) => (container = ref)}
      className='sortable-container'
      onDragOver={dragOver}
    >
      {React.Children.map(children, (child) => (
        <SortableItem
          orderKey={child.key}
          dragStart={dragStart}
          dragEnd={dragEnd}
        >
          {child}
        </SortableItem>
      ))}
    </div>
  )
}

const SortableItem = ({ children, orderKey, dragStart, dragEnd }) => {
  return (
    <div
      className='sortable-item'
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      data-key={orderKey}
      draggable
    >
      {children}
    </div>
  )
}

export { Sortable }
