import React from 'react'

const Tealist = ({ name, tea_production, coffee_production }) => {
  let isStatus = false;
  function handleClick() {
    if (isStatus) {
      coffee_production()
    }

    else {

      tea_production()
    }

    isStatus = !isStatus;
  }


  return (
    <div >
      <div className=' w-full h-10 flex justify-center mt-20'>
        <button className='h-10 w-36 rounded-lg bg-amber-950 text-white border mx-auto' onClick={handleClick} >{name}</button>
      </div>
      <div id='result-block' className='h-auto  w-96 bg-amber-50 p-10 font-bold text-amber-950 mx-auto shadow-xl mt-10 '  > </div>
    </div>
  )
}

export default Tealist
