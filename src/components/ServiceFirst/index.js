import React from 'react';
import iconfirst from '../svg/Icon(1).svg';
import iconseccond from '../svg/Icon(2).svg';
import iconthird from '../svg/Icon(3).svg';
import mask from '../svg/MaskGroup.svg';

import './ServiceFirst.scss';


const ServiceFirst = () => {
  const listService = [{
    img: iconfirst,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  },
  {
    img: iconseccond,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  },
  {
    img: iconthird,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  }]
  return (
    <div
      className="service-first"   
      style={{
        backgroundImage: `url(${mask})`,
      }}
    >
     {listService?.map((item,index) => (
      <div className='service-first__box'>
        <img src={item?.img} alt="icon" key={`icon--${index}`} />
        <div className='title'>{item?.title}</div>
        <div className='content'>{item?.content}</div>
      </div>
     ))}
    </div>
  );
};

export default ServiceFirst;