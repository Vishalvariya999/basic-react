import React, { useState } from 'react'

const UseStateEx = () => {
    const [myNum, setMyNum] = useState(10);
    return (
        <>
            <h1 className='h1'>{myNum}</h1>
            <button className='btn btn-primary mx-1' onClick={() => setMyNum(myNum + 1)}>Inc</button>
            <button className='btn btn-success' onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>Dec</button >
        </>
    )
}

export default UseStateEx