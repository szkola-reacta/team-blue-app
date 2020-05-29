import React from 'react';
import Image from 'react-bootstrap/Image';

import './Category.scss';
import '../../Styles/fontello/css/fontello.css';

function Category({ name, icon }) {
  return (
      <div className="icon-div" xs={12} md={6} lg={3} xl={3} >
        <Image className={icon} alt="" src="" roundedCircle />
        <p className="icon-name">{name}</p>
      </div>
  );
}

export default Category;