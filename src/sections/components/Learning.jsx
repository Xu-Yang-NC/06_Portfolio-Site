import { VscDebugBreakpointLog } from 'react-icons/vsc';

function Learning() {
  return (
    <div className='info-learning'>
      <ul>
        <li>
          <div className='li-point'>
            <VscDebugBreakpointLog className='icons' />
            <h2>Algorithm & Data Structure</h2>
          </div>
          <p>Sorting, Hash Tables, Priority Queue, Dynamic Programming, etc</p>
        </li>
        <li>
          <div className='li-point'>
            <VscDebugBreakpointLog className='icons' />
            <h2>Parallel Computing</h2>
          </div>
          <p>Shared Memory, Distributed Memory, and Accelerator</p>
        </li>
        <li>
          <div className='li-point'>
            <VscDebugBreakpointLog className='icons' />
            <h2>Applied Machine Learning</h2>
          </div>
          <p>
            Reading & Storing Data, Preprocessing Data, Machine Learning
            Application, and Result Analysis
          </p>
        </li>
        <li>
          <div className='li-point'>
            <VscDebugBreakpointLog className='icons' />
            <h2>Applied Databases</h2>
          </div>
          <p>SQL, Database Design, MongoDB, XML, etc</p>
        </li>
      </ul>
    </div>
  );
}

export default Learning;
