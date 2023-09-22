import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Cart = () => {

  
  const cart_Data = useSelector((state) => state.cartData)
  let amount = cart_Data.length && cart_Data.map(item => item.price).reduce((pre , next) => pre+next) 

  return (
    <div className="App bg-green-100 font-bold">
      <Link to="/" className='underline'>ProductList</Link>
      
      <div className="cartPage  bg-white ">
        <table className=" table-fixed w-full h-auto border-collapse border border-slate-400  text-center">
          <thead className='border border-slate-300   '>
            <tr className='border border-slate-300'>
            
              <td className='border border-slate-300'>Color</td>
              <td className='border border-slate-300'>Price</td>
              <td className='border border-slate-300'>Brand</td>
              <td className='border border-slate-300'>Category</td>
              <td className='border border-slate-300'>Image</td>
            </tr>
          </thead>
          <tbody>
          {
            cart_Data.map((item) =>
              <tr key={item.id}>
                
                <td className='border border-slate-300 '>{item.color}</td>
                <td className='border border-slate-300 '>{item.price}</td>
                <td className='border border-slate-300 '>{item.brand}</td>
                <td className='border border-slate-300 '>{item.category}</td>
                <td className='border border-slate-300 '><img src={item.image} alt="" style={{ height: 100,width:100 }} className='mx-auto' /></td>
              </tr>
            )
          }
          </tbody>
        </table>
        <div>
          <div className="price-details bg-red-300 w-1/3 mx-auto mt-56 text-center text-2xl">
            <div><span>Amount</span><span>{amount}</span></div>
            <div><span>Discount</span><span>{(amount/10)}</span></div>
            <div><span>Tax</span><span>{(amount/18)}</span></div>
            <div><span>Total</span><span>{(amount+amount/18-amount/10)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart
