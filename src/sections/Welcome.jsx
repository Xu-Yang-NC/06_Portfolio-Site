import Typical from 'react-typical';
import Resume from '../assets/Resume.pdf';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';

function Welcome() {
  return (
    <div id='home'>
      <div className='overlay'></div>
      <Navbar />
      <MobileNav />
      <div className='container'>
        <div className='content'>
          <h1 className='z-1'>Xu Yang</h1>
          <h2 className='z-2'>I am</h2>
          <div className='typical'>
            <h3 className='z-3'>
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
            </h3>
          </div>
          <div className='btn-container'>
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
    </div>
  );
}

export default Welcome;
