import React from 'react';
import mask from '../svg/mask.svg';
import './introduce.scss';

const Introduce = () => {
  return (
    <div
      className="introduce"
      style={{
        backgroundImage: `url(${mask})`,
      }}
    >
      <div className="introduce__box">
        <div className='title'>Another landing page for startups</div>
        <div className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Introduce;