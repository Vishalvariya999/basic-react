import React, { useState } from 'react'

const UseStateEx = () => {
    const [myNum, setMyNum] = useState(10);
    const [nowTime, UpdatedTime] = useState(new Date());

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         UpdatedTime(new Date());
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const formatTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        return date.toLocaleTimeString(undefined, options);
    };
    const getNowTime = () => {
        UpdatedTime(new Date());
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <p>Date: {formatDate(nowTime)}</p>
                    <p>Time: {formatTime(nowTime)}</p>
                    <button className='btn btn-primary' onClick={getNowTime}>Click Me</button>
                </div>
                <div className="col-lg-6">
                    <h1 className='h1'>{myNum}</h1>
                    <button className='btn btn-primary mx-1' onClick={() => setMyNum(myNum + 1)}>Inc</button>
                    <button className='btn btn-success' onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>Dec</button >
                </div>
            </div>
        </>
    )
}

export default UseStateEx