import React, { useState, useEffect, useRef } from 'react'

const Accordion = ({ children, multi }) => {
  const [active, setActive] = useState(null)

  return (
    <div className='accordion'>
      {React.Children.map(children, (child, idx) => {
        const closed = active !== idx
        return React.cloneElement(child, { idx, multi, closed, setActive })
      })}
    </div>
  )
}

const AccordionItem = ({ children, multi, title, idx, closed, setActive }) => {
  const [open, setOpen] = useState(true)
  const originalHeight = useRef()
  let contentDiv = {}

  useEffect(() => {
    originalHeight.current = contentDiv.offsetHeight
    setOpen(false)
  }, [contentDiv.offsetHeight])

  useEffect(() => setOpen(!closed), [closed])

  const contentStyle = {}
  const itemStyle = { visibility: 'hidden' }

  if (originalHeight.current) {
    contentStyle.maxHeight = open ? originalHeight.current : 0
    itemStyle.visibility = 'visible'
  }

  const handleActive = (ev) => {
    setActive(closed ? idx : null)
  }

  return (
    <div className='accordion-item' style={itemStyle}>
      <div className='accordion-title' onClick={handleActive}>
        <div>{title}</div>
        <i className={open ? 'open' : ''}></i>
      </div>
      <div
        ref={(ref) => (contentDiv = ref)}
        className='accordion-content'
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem }
