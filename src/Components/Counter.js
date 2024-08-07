import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByTen, decrementByTen } from '../Redux/action'
import './Counter.css'
export default function Counter() {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    return (
        <div className='container'>
                <div className="counter">
                    <h1 style={{marginBottom: 20}}>Counter: {count}</h1>
                    <button onClick={() => dispatch(increment())} className='buttons'>Increment</button>
                    <button onClick={() => dispatch(decrement())} className='buttons'>Decrement</button>
                    <button onClick={() => dispatch(incrementByTen())} className='buttons'>Increment By Ten</button>
                    <button onClick={() => dispatch(decrementByTen())} className='buttons'>Decrement By Ten</button>
                </div>
        </div>
    )
}
