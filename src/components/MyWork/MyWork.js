import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Buttons from '../Buttons/Buttons';
import './style/myWork.scss';

const MyWork = () => {
  return (
    <div>
      <h2 className='recent'>
        <span className='recentOrg'>Recent</span> Work
      </h2>
      <Logo />
      <a href='https://camacho.netlify.app/'>
        <div className='contOne'></div>
        <p className='barber1'>Camacho Barber Shop</p>
        <p className='barber2'>Frontend W/Gatsby</p>
        <p className='barber3'>Freelance, 2020</p>
        <p className='barbLink'>></p>
      </a>
      <a href='https://allskill.netlify.app/#about'>
        <div className='contTwo'></div>
        <p className='allOne'>All Skill Services</p>
        <p className='allTwo'>Frontend</p>
        <p className='allThree'>Freelance, 2020</p>
        <p className='allLink'>></p>
      </a>
      <a href='https://class-with-chris.herokuapp.com/signin.html'>
        <div className='contThree'></div>
        <p className='classOne'>Classin with Chris</p>
        <p className='classTwo'>Frontend W/HTML, SASS, JS</p>
        <p className='classThree'>Personal, 2021</p>
        <p className='classLink'>></p>
      </a>
      <div className='myWorkButton'>
        <Link to='/aboutme'>
          <Buttons title='About Me' />
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
