import { useLayoutEffect, useReducer, useState } from "react"

/*Reducer sample: count up/down
 1. Init state
 2. Actions: up / down
 3. Reducer function
 4. Dispatch
*/

const initState = 0
const UP_ACTION = 'up'
const DOWN_ACTION = 'up'

//Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function Content() {
    // count state and a dispatch function 
    //call reducer with reducer function and initState
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button onClick={()=> dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>

    )
}

export default Content