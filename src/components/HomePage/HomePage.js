import React from 'react';
import tree from './img/tree.png';
import Logo from '../Logo/Logo';
import Buttons from '../Buttons/Buttons';
import './style/homePage.scss';

const HomePage = () => {
  return (
    <div>
      <h1 className='name'>
        <span className='first'>Robert</span> Biehn
      </h1>

      <h1 className='job'>Front-end</h1>
      <h1 className='job2'>Developer</h1>
      <p className='aboutMe'>
        Hi. I’m a front end developer in Costa Rica. My passion is encouraging
        community growth and success with technology.
      </p>

      <img className='tree' src={tree} alt='tree with green leaves' />
      <div className='button1'>
        <Buttons title='My Work' />
      </div>
      <div className='button2'>
        <Buttons title='About Me' />
      </div>
      <Logo />
    </div>
  );
};

export default HomePage;
