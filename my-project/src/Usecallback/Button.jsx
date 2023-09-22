import React from 'react'

const Button = ({handleClick , children}) => {

  console.log('Rendering button - ' , children);

  return (
    <div>
        <button onClick={handleClick} className='bg-white h-10 w-20 rounded-full'>{children}</button>
    </div>
  )
}

export default React.memo(Button)