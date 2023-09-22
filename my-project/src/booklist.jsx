import React from 'react'
import Book from './book'

const bookinfo = [
  {
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Shreeman yogi",
    Author: "Ranjeet desai",
    price: "639"
  },
  {
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "happiness of success",
    Author: "William Shakespeare ",
    price: "700"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBxgI4cZhdsOGkObC48dHE--q-ff0NOQrRYP888I87r4A0gZjKU3Cl_iVZo_d3G2v6pU&usqp=CAU",
    title: "Shreeman yogi",
    Author: "Ranjeet desai",
    price: "639"
  },
  {
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "happiness of success",
    Author: "William Shakespeare ",
    price: "700"
  }
]
const Booklist = () => {
  return (
    <>
      {bookinfo.map((ele1) => {
        return (
          // <div>
          <Book image={ele1.image} title={ele1.title} Author={ele1.Author} price={ele1.price} />
          // </div>
        )
      })}
    </>
  )
}

export default Booklist;
