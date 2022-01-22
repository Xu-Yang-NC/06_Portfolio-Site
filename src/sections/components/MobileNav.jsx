import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import NavLinks from './NavLinks';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div id='mobile-nav'>
      <div className='top-container'>
        <h2 className='logo'>
          {' '}
          X &<span> Y</span>
        </h2>
        {!isOpen && (
          <FiMenu className='icons' onClick={() => setIsOpen(!isOpen)} />
        )}
        {isOpen && (
          <MdClose className='icons' onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      {isOpen && <NavLinks isMobile={true} closeMenu={closeMenu} />}
    </div>
  );
}

export default MobileNav;
