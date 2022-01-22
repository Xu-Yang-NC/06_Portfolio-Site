import NavLinks from './NavLinks';

function Navbar() {
  return (
    <div id='navbar'>
      <h2 className='logo'>
        {' '}
        X &<span> Y</span>
      </h2>
      <NavLinks />
    </div>
  );
}

export default Navbar;
