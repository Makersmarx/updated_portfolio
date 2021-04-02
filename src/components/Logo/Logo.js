import React from 'react';
import './style/logo.scss';
import myLogo from './images/logo.png';

const Logo = () => {
  return (
    <div>
      <img className='logo' src={myLogo} alt='sun logo' />
    </div>
  );
};

export default Logo;
