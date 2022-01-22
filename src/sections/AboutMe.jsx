import about from '../assets/about.jpg';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineRight,
} from 'react-icons/ai';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id='about'>
      <div className='container'>
        <div data-aos='fade-up' className='info-content'>
          <div className='about-content'>
            <h1 className='z-2'>&lt; About Me /&gt;</h1>
            <div className='icon-container'>
              <a
                href='https://www.linkedin.com/in/xu-yang-530838181/'
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillLinkedin className='icons z-2' />
              </a>
              <a
                href='https://github.com/Xu-Yang-NC'
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillGithub className='icons z-2' />
              </a>
              <a
                href='https://www.facebook.com/xu.yang.73594/'
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillFacebook className='icons z-2' />
              </a>
            </div>
            <p className='z-3'>
              I graduated with a Civil Engineering degree. But, I worked in a
              CNC machine shop as a CNC engineer for a year after I graduated. I
              noticed I could solve a lot more problems if I know how to
              program. Therefore, I decided to pursue my master's degree in
              Computer Science. I would like to be a backend developer at the
              end of the day.
            </p>
            <div className='btn btn-primary'>
              <AiOutlineRight />
              <a href='#projects' rel='noopener noreferrer'>
                Check My Works
              </a>
            </div>
          </div>
          <div className='img-container'>
            <img className='about-img' src={about} alt='pic' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
