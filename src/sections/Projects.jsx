import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { AiOutlineRight } from 'react-icons/ai';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
SwiperCore.use([Navigation]);

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id='projects'>
      <div data-aos='fade-up' className='container'>
        <h1 className='z-2'>&lt; Projects /&gt;</h1>
        <Swiper navigation={true} className='mySwiper'>
          <SwiperSlide className='project-1'>
            <div className='project-content'>
              <h2>Free To Play Games Site </h2>
              <p>
                In this project, I refactor a pre-existing home security alarm
                application by splitting it into multiple modules. Maven plays a
                big role in this project, it manages all the required
                dependencies and its project structure makes the entire project
                much more organized.
              </p>
              <div className='project-details'>
                <AiOutlineRight className='icons' />
                <a
                  href='https://github.com/Xu-Yang-NC/05_Free-To-Play-Games-Site'
                  target='_blank'>
                  {' '}
                  Details
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='project-2'>
            <div className='project-content'>
              <h2>Shopping List Chrome Extension</h2>
              <p>
                In this project, I refactor a pre-existing home security alarm
                application by splitting it into multiple modules. Maven plays a
                big role in this project, it manages all the required
                dependencies and its project structure makes the entire project
                much more organized.
              </p>
              <div className='project-details'>
                <AiOutlineRight className='icons' />
                <a
                  href='https://github.com/Xu-Yang-NC/04_Shopping-List-Chrome-Extension'
                  target='_blank'>
                  {' '}
                  Details
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='project-3'>
            <div className='project-content'>
              <h2>UdaSecurity</h2>
              <p>
                In this project, I refactor a pre-existing home security alarm
                application by splitting it into multiple modules. Maven plays a
                big role in this project, it manages all the required
                dependencies and its project structure makes the entire project
                much more organized.
              </p>
              <div className='project-details'>
                <AiOutlineRight className='icons' />
                <a
                  href='https://github.com/Xu-Yang-NC/03_UdaSecurity'
                  target='_blank'>
                  {' '}
                  Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
