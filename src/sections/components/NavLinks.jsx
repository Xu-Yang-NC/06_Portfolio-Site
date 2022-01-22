import { motion } from 'framer-motion';

function NavLinks(props) {
  const animationFrom = { opacity: 0, y: -40 };
  const animationTo = { opacity: 1, y: 0 };

  return (
    <nav>
      <ul className='navigation'>
        <motion.li
          initial={animationFrom}
          animate={animationTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMenu()}>
          <a href='#home' rel='noopener noreferrer'>
            Home
          </a>
        </motion.li>
        <motion.li
          initial={animationFrom}
          animate={animationTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMenu()}>
          <a href='#about' rel='noopener noreferrer'>
            About
          </a>
        </motion.li>
        <motion.li
          initial={animationFrom}
          animate={animationTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMenu()}>
          <a href='#skills' rel='noopener noreferrer'>
            Skills
          </a>
        </motion.li>
        <motion.li
          initial={animationFrom}
          animate={animationTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMenu()}>
          <a href='#projects' rel='noopener noreferrer'>
            Projects
          </a>
        </motion.li>
        <motion.li
          initial={animationFrom}
          animate={animationTo}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMenu()}>
          <a href='#contact' rel='noopener noreferrer'>
            Contact
          </a>
        </motion.li>
      </ul>
      <div className='space'></div>
    </nav>
  );
}

export default NavLinks;
