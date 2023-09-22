import React from 'react';
import Tasktea from './Tealist';


function coffee_pro() {
    return (document.getElementById("result-block").innerHTML = `
    <div>
      <div>
        <h1 className='font-bold ms-20 text-2xl underline  text-amber-950 mb-5 mt-10'>COFFEE</h1>
  
        <li className='font-bold text-amber-950  text-xl ms-12'>a part of plant</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>looks like Beans</li>
  
        <h1 className='font-bold ms-20 mt-10 text-2xl underline  text-amber-950 '>INGREDIANTS</h1>
        <li className='font-bold text-amber-950  text-xl ms-12'>Milk</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>Coffee Beans</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>Sugar</li>
  
        <h1 className='font-bold ms-20 mt-10 text-2xl underline  text-amber-950'>A WAY OF MAKING COFFEE</h1>
        <li className='font-bold text-amber-950  text-xl ms-12'>Start the Stove</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>Add Milk</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>Add 1 tb. spoon of Cofee</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>Add 2 tb. spoon of Sugar</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>Boil it for 5-7 minutes</li>
        <li className='font-bold text-amber-950  text-xl ms-12'>serve the yummy Cofee into CUP</li>
  
        </div>
  
      </div>
    `)
  }
  
  function tea_pro() {
  
    return (document.getElementById("result-block").innerHTML = `
    <div>
  
  <div>
      <h1 className='font-bold ms-20 text-2xl underline  text-amber-950 mb-5 mt-10'>TEA</h1>
  
      <li className='font-bold text-amber-950  text-xl ms-12'>a part of Plant</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>looks like Leaf</li>
  
      <h1 className='font-bold ms-20 mt-10 text-2xl underline  text-amber-950 '>INGREDIANTS</h1>
  
      <li className='font-bold text-amber-950  text-xl ms-12'>Water</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Milk</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Tea Leaves</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Sugar</li>
  
      <h1 className='font-bold ms-20 mt-10 text-2xl underline  text-amber-950'>A WAY OF MAKING Tea</h1>
      <li className='font-bold text-amber-950  text-xl ms-12'>Start the Stove</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Add 5 tb. of Water</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Add 1 tb. spoon of Tea Leafe</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Add 2 tb. spoon of Sugar</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Add Milk</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>Boil it for 5-7 minutes</li>
      <li className='font-bold text-amber-950  text-xl ms-12'>serve the yummy Tea into CUP</li>
    </div>
    </div>
    `)
  }
const Teacoffee = () => {
  return (
    <div>
      <Tasktea name="Tea/Coffee" tea_production={tea_pro} coffee_production={coffee_pro}></Tasktea>
    </div>
  )
}

export default Teacoffee
