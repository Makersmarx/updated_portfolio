import React from 'react';

import './style/buttons.scss';

const Buttons = (props) => {
  const clickIt = props.onclick;

  return (
    <div>
      <button onClick={clickIt}>{props.title}</button>
    </div>
  );
};

export default Buttons;
