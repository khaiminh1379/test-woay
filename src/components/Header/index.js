import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className='header__left'>Content...</div>
      <div className='header__right'>
        <div className='text'>Home</div>
        <div className='text'>Case Studies</div>
        <div className='text'>Contact</div>
      </div>
    </div>
  );
};

export default Header;