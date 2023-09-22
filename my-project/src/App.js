import React from 'react'
// import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import Navbar from './NestedRouting/Navbar'
// import Home from './NestedRouting/Home'
// import Product from './NestedRouting/Product'
// import AboutUs from './NestedRouting/AboutUs'
// import Features from './NestedRouting/Features'
// import NewProduct from './NestedRouting/Newproduct'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import CakeContainer from './Component/cakeContainer'


const App = () => {
  return (
    <div>
        <Provider Store={Store}>
       <CakeContainer/>
        </Provider>
    </div>
  )
}

export default App
