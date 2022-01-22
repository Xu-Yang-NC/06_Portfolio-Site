import Welcome from './sections/Welcome';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Project from './sections/Projects';
import Contact from './sections/Contact';
import 'swiper/css/bundle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Welcome />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
