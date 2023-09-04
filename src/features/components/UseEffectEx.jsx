import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const [myNum, setMyNum] = useState(10);
    useEffect(() => {
        document.title = `Food(${myNum})`
    });

    return (
        <>
            <h1 className='h1'>{myNum}</h1>
            <button className='btn btn-primary mx-1' onClick={() => setMyNum(myNum + 1)}>Inc</button>
        </>
    )
}

export default UseEffectEx