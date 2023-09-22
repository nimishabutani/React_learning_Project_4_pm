import { useContext } from 'react';
import React from 'react'
import { NameContext } from './Main';
import D from './D';

const B = () => {


  let { info } = useContext(NameContext)

  return (
    <>
      <div className='text-center my-10'>
        <div className='text-4xl font-bold'> B </div>
        <div>
        {info.map((ele) => {
          return (
            <div><b>Name : </b>{ele.Name} &nbsp;<b>Age : </b>{ele.Age} &nbsp;<b>Address : </b>{ele.Address}<br/></div>
          )
      })}


        </div>
        <D />
      </div>
    </>
  )
}

export default B
