import React, { useState, useEffect } from 'react';
import { FaTools, FaBook } from 'react-icons/fa';
import Knew from './components/Knew';
import Learning from './components/Learning';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const [isKnew, setIsKnew] = useState(true);
  const [isLearning, setIsLearning] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleKnew = e => {
    if (isKnew) {
      e.preventDefault();
    } else {
      setIsKnew(!isKnew);
      setIsLearning(!isLearning);
    }
  };

  const handleLearning = e => {
    if (isLearning) {
      e.preventDefault();
    } else {
      setIsKnew(!isKnew);
      setIsLearning(!isLearning);
    }
  };

  return (
    <div id='skills'>
      <div data-aos='fade-right' className='container'>
        <h1 className='z-2'>&lt; Skills /&gt;</h1>
        <div className='info-skills'>
          <div className='pointer'>
            <div
              className='skill-item'
              onClick={handleKnew}
              style={isKnew ? { color: '#f69e12' } : { color: '#eee' }}>
              <div>
                <FaTools className='icons' />
              </div>
              <span>What I already knew</span>
            </div>
            <div
              className='skill-item'
              onClick={handleLearning}
              style={isLearning ? { color: '#f69e12' } : { color: '#eee' }}>
              <div>
                <FaBook className='icons' />
              </div>
              <span>What I am learning</span>
            </div>
          </div>
          <div className='skill-details'>
            {isKnew ? <Knew /> : <Learning />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
