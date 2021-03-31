import React from 'react';
import './styles/buttons.scss';

const Buttons = (props) => {
  function clicked() {
    console.log('ya baby');
  }

  return (
    <div>
      {/* add onclick event  */}
      <a href='www.google.com'>
        <button onClick={clicked}>{props.title}</button>
      </a>
    </div>
  );
};

export default Buttons;
