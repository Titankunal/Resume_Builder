import React from 'react'

const Modal = ({children, 
    isOpen, 
    onClose, 
    title,
    hideHeader,
    showActionBtn,
    actionBtnIcon = null,
    actionBtnText,
    onActionClick,
}) => {
  return <div className=''>
    {/* Modal content */}
    <div className={'relative flex flex-col bg-white shadow-lg overflow-hidden'}>
      {/* Modal Header */}
      {!hideHeader &&(
        <div className=''>
          <h3 className=''>(title)</h3>

          {showActionBtn &&(
            <button className='' onClick={() => onActionClick()}>
              {actionBtnIcon}
              {actionBtnText}
            </button>
          )}
        </div>
      )}

      <button type='button'
      className=''
      onClick={onclose}
      >
        <svg className=''
        aria-hidden='true'
        xmlns='https://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 14'
        >
          <path 
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M1 1l6 6m0 6m7 7l6-6m7 7l-6 6'
          />
        </svg>
      </button>

      {/* Modal Body */}
    </div>
  </div>
  
}

export default Modal