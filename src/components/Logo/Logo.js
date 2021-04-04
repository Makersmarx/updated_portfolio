import React from 'react';
import './style/logo.scss';
import myLogo from './images/logo.png';

const Logo = () => {
  const homePage = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <img className='logo' src={myLogo} alt='sun logo' onClick={homePage} />
    </div>
  );
};

export default Logo;
