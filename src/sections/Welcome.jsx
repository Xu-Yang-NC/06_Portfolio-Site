import Typical from 'react-typical';

function Welcome() {
  return (
    <div id='home'>
      <div className='overlay'></div>
      <nav id='navbar'>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
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
                  'Currently Enrolled in The CS Master Program at UNC Charlotte',
                  2000,
                  'Looking for 2022 Summer Internship',
                  2000,
                ]}
              />
            </h2>
          </div>
        </div>
        <div className='buttons-container'>
          <a href='' className='btn btn-primary'>
            Resume
          </a>
          <a href='#contact' className='btn btn-secondary'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
