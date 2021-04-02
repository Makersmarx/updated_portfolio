import React from 'react';
import { Link } from 'react-router-dom';
import tree from './img/tree.png';
import Logo from '../Logo/Logo';
import Buttons from '../Buttons/Buttons';
import './style/homePage.scss';

const HomePage = () => {
  const onclickMe = () => {
    alert('lets add a loader');
  };

  const onCluckedIt = () => {
    alert('yep yep here too');
  };

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
        <Link to='/mywork'>
          <Buttons title='My Work' onclick={onclickMe} />
        </Link>
      </div>
      <div className='button2'>
        <Link to='/aboutme'>
          <Buttons title='About Me' onclick={onCluckedIt} />
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default HomePage;
