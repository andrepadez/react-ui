import { useState, useEffect } from 'react'
import closeSVG from './close.svg'
import './slide-modal.scss'

const SlideModal = props => {
  const { children, title, noBackgroundClose, onClose } = props

  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(true), [])

  const transitionEnd = ev => !open && onClose()

  const bgClick = ev => !noBackgroundClose && ev.target.classList.contains('modal-background') && setOpen(false)

  return (
    <div className='slide-modal'>
      <div onClick={bgClick} onTransitionEnd={transitionEnd} className={`modal-background${open ? ' open' : ''}`}>
        <div className='modal-wrapper'>
          <header>
            <div onClick={ev => setOpen(false)}>
              <img src={closeSVG} alt='close' />
            </div>
            <h2>{title}</h2>
          </header>
          <hr />
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default SlideModal
