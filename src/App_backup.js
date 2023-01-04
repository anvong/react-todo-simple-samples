import { useState } from 'react';
import './App.css';
import Content from './Content';

// List UL sample
// function App() {
  
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState( () => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log(storageJobs)
//     return storageJobs
//   })

//   const handleSubmit = () => {
//     //setJobs( prev => [...prev, job])
//     setJobs(prev => {
//       const newJobs = [...prev, job]
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
      
//       return newJobs
//     })
//     // clear input
//     setJob('')
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <input value={job}
//         onChange={e => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}

//       </ul>
//     </div>
//   );
// }

// Mount and Unmount
function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}
export default App;
