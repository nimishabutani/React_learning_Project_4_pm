import React from 'react'
import { useState } from 'react';
import datas from './data.json'


const Hdata = () => {
    const [nData, setnData] = useState(datas);
    const handleClick = () => {
        setnData([])
    }
    const handleRemove = (itemId) => {
        setnData(nData.filter(item => item.id !== itemId))

    }
    return (
        <div>
            <ul>
                {
                    nData.map(items =>
                        <li key={items.id}>
                            {items.name}
                            <button onClick={() => handleRemove(items.id)}>Remove</button>

                        </li>
                    )
                }
            </ul>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
}

export default Hdata;
