import React from 'react'
import ExpanceData from './ExpanceData'

const Expanceitem = (props) => {
  return (
   <>
   <div className='flex'>
   <ExpanceData date={props.date}/>
   <div className='flex justify-around items-center'>
   <h2></h2>
   </div>
   
   </div>

   </>
  )
}

export default Expanceitem
