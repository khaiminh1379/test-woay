import React from "react";

import mask from "../svg/MaskGroupS2.svg";
import img from "../svg/ContentS2.svg";

import './ServiceSeccond.scss';

const ServiceSeccond = () => {
  return (
    <div
      className="service-seccond"
      style={{
        backgroundImage: `url(${mask})`,
      }}
    >
      <div className="service-seccond__box">
        <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        <div className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
      </div>
      <img src={img} alt="img" />
    </div>
  );
};

export default ServiceSeccond;
