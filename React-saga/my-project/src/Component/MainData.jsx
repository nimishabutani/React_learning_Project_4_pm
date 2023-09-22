import { addToCart } from '../Redux/Action'
import { removetocart } from '../Redux/Action';
import { emptycart } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productList } from "../Redux/ProductAction"


function MainData() {

  const dispatch = useDispatch();
  let data = useSelector((state) =>  state.productData );
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  }, [])


  return (
    <div className=''>
      <button onClick={() => dispatch(emptycart())} className='ms-10 border-4 border-black'>Empty Cart</button>

      <button onClick={() => dispatch(productList())} className='ms-10 border-4 border-black'>Call Product List</button>
      <div className='product-container flex '>
        {
          data.map((item)=><div key={item.id} className='product-item bg-slate-400 w-full mx-auto mt-10'>
            <img src={item.image} alt="" style={{ height: 100 ,width:100}} />
            <div>Color : {item.color}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} className=' border-4 border-black'>Add Cart</button>
              <button onClick={() => dispatch(removetocart(item.id))} className='ms-3 border-4 border-black'>remove cart</button>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default MainData;
