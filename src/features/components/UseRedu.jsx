import React, { useReducer } from 'react'
const reducer = (state, action) => {
    // switch (action.type) {
    //     case 'INC':
    //         state = state + 1;
    //         break;
    //     case 'DESC':
    //         state = state - 1;
    //         break
    //     default:
    //         return state;
    // }
    if (action.type === 'INC') {
        state = state + 1;
    }
    if (state > 0 && action.type === 'DESC') {
        state = state - 1;
    }
    return state;
}
const UseRedu = () => {
    const [state, dispatch] = useReducer(reducer, 10);
    return (
        <>
            <h1 className='h1'>{state}</h1>
            <button className='btn btn-primary mx-1' onClick={() => dispatch({ type: 'INC' })}>Inc</button>
            <button className='btn btn-success' onClick={() => dispatch({ type: 'DESC' })}>Dec</button >
        </>
    )
}

export default UseRedu