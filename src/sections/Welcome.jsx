import Typical from 'react-typical';
import Resume from '../assets/Resume.pdf';

function Welcome() {
  return (
    <div id='home'>
      <div className='overlay'></div>
      <nav id='navbar'>
        <ul>
          <li>
            <a href='#home' rel='noopener noreferrer'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' rel='noopener noreferrer'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' rel='noopener noreferrer'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' rel='noopener noreferrer'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' rel='noopener noreferrer'>
              Contact
            </a>
          </li>
        </ul>
        <div className='space'></div>
      </nav>
      <div className='content-container'>
        <div className='content'>
          <h1 className='z-1'>Xu Yang</h1>
          <h2 className='z-2'>I am</h2>
          <div>
            <h2 className='z-3'>
              {' '}
              <Typical
                loop={Infinity}
                steps={[
                  'A Masters Student in Computer Science at UNC Charlotte',
                  2000,
                  'Looking for 2022 Summer Internship',
                  2000,
                ]}
              />
            </h2>
          </div>
        </div>
        <div className='buttons-container'>
          <a href={Resume} download='Resume.pdf' className='btn btn-primary'>
            Resume
          </a>
          <a
            href='#contact'
            rel='noopener noreferrer'
            className='btn btn-secondary'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
