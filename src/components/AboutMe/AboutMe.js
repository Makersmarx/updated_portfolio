import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import './style/aboutMe.scss';
import Logo from '../Logo/Logo';
import trees from './img/trees.png';

const AboutMe = () => {
  return (
    <div>
      <div>
        <h1 className='about'>About Me</h1>
        <p className='line'>
          I'm a passionate human that works as a{' '}
          <span className='lilcolor'>Front-end Developer</span>.
        </p>
        <p className='line2'>
          My roles have been varied in life and work, but my priority is to be
          the best <span className='green'>husband</span>,{' '}
          <span className='green'>father</span> and{' '}
          <span className='green'>life long student</span> that I can be.
        </p>
        <p className='line3'>
          While I spend most of my time with{' '}
          <span className='pink'>Movable Ink</span> and freelance projects. I
          also enjoy learning back-end development and helping others learn new
          skills.
        </p>
        <p className='line4'>
          I can also be found in the mountains of Costa Rica sipping coffee,
          <span className='green'>Github</span>, or LinkedIn.
        </p>
      </div>
      <div className='button3'>
        <Link to='/myskills'>
          <Buttons title='My Skills' />
        </Link>
      </div>
      <img className='trees' src={trees} alt='forest with clouds' />

      <Logo />
    </div>
  );
};

export default AboutMe;
