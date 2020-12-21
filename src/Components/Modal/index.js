import './modal.scss'

const Modal = ({ children, onClose }) => {
  const onBackgroundClick = function (ev) {
    if (ev.target.className === 'modal-background') {
      onClose()
    }
  }

  return (
    <div onClick={onBackgroundClick} className='modal-background'>
      <div className='modal-wrapper'>{children}</div>
    </div>
  )
}

export default Modal
