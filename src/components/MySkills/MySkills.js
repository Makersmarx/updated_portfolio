import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Buttons from '../Buttons/Buttons';
import './style/mySkills.scss';

const MySkills = () => {
  return (
    <div>
      <h1>
        <span className='orange'>Skills</span>
      </h1>
      <p className='skills1'>
        I am a determined and outgoing developer that has experience in
        freelancing and working remotely.
      </p>
      <p className='skills2'>
        Working with others, and bridging the gap between client and code is
        where I excel and feel comfortable.
      </p>
      <p className='skills3'>
        I have years of experience working in sales and feel confident working
        directly with clients or sales teams.
      </p>
      <p className='skills4'>Here are some of the tools I enjoy using:</p>
      {/* skills start */}
      <div className='skillsCont'>
        <h3 className='lang'>Languages</h3>
        <p className='css'>CSS & Sass</p>
        <p className='html'>HTML</p>
        <p className='js'>JavaScript</p>
        <p className='bash'>Bash</p>
        <p className='post'>PostgreSQL</p>
        {/* tools start */}
        <h3 className='tools'>Tools</h3>
        <p className='web'>Webpack, NPM scripts, Yarn</p>
        <p className='git'>Git</p>
        <p className='various'>Various Editing Tools</p>
        <p className='access'>Accessibility Testing</p>
        {/* framework start */}
        <h3 className='frame'>Frameworks</h3>
        <p className='react'>React, jQuery</p>
        <p className='gatsby'>Gatsby</p>
        <p className='node'>Node</p>
        <p className='next'>NextJs</p>
        <p className='boot'>Bootstrap</p>
        {/* additional start */}
        <h3 className='add'>Additional</h3>
        <p className='linux'>Linux Admin</p>
        <p className='sales'>Salesforce</p>
        <p className='figma'>Figma</p>
        <p className='fiveS'>5S - Lean Manufacturing</p>
        <p className='AWS'>AWS, Netlify, and Heroku</p>
      </div>
      <div>
        <Logo />
      </div>
      <div className='skillButton'>
        <Link to='/mywork'>
          <Buttons title='My work' />
        </Link>
      </div>
    </div>
  );
};

export default MySkills;
