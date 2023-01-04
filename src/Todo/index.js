import { useReducer, useRef, useState } from 'react';
import reducer, {initState} from './reducer'
import {addJob, setJob, deleteJob} from './actions'

//Reducer sample
function App() {
  // reducer function 
  const [state, dispatch] = useReducer(reducer, initState)
  // state to store the inputting job and list of jobs
  const { job, jobs } = state
  // input ref to focus the input box after submit
  const inputRef = useRef()
  // console.log(jobs)

  const handleSubmit = () => {
    // add the job to list
    dispatch(addJob(job))
    // clear input box
    dispatch(setJob(''))
    // set focus to input box
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <h3>Todo with useState, useReducer, useRef</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item}
            <span
              onClick={() => dispatch(deleteJob(index))}
              style={{color:'red'}}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
