import React from 'react';
import '../App.css';

const Logo = ({ logo }) => (
  <div>
    <img
      className='freecodecamp-logo'
      src={logo}
      alt='freecodecamp-logo'
    />
  </div>
);

export default Logo;