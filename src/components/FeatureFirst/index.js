import React from "react";

import mask from "../svg/FeaFirstMask.svg";
import imgFeature from "../svg/ImgFeaFirst.svg";

import './FeatureFirst.scss';

const FeatureFirst = () => {
  return (
    <div
      className="feature-first"
      style={{
        backgroundImage: `url(${mask})`,
      }}
    >
      <img src={imgFeature} alt="img" />
      <div className="feature-first__box">
        <div className="title">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
        <div className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
      </div>
    </div>
  );
};

export default FeatureFirst;
