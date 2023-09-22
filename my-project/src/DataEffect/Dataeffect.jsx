import React from 'react'
import { useEffect, useState } from 'react'

const Dataeffect = () => {

  const [clicked, setclicked] = useState();
  useEffect(() => {
    alert("we use USE EFFECT ")
  });
  return (
    <div>
      <button onClick={() => setclicked('Subscribe')}>subscribe</button>
      <br />
      <br />
      <button onClick={() => setclicked('To')}>To</button>
      <br />
      <br />
      <button onClick={() => setclicked('Dropout')}>Dropout</button>
    </div>
  )
}

export default Dataeffect
