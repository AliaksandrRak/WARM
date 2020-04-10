import React, { useState } from 'react';
import './Section.sass';

function SectionContent(props) {

  return (
    <div className="home-section-content">
      {props.content && props.content.map((el, index) =>
        <>
          {el.img &&
            <img src={el.img} alt={el.name} />
          }
          {el.text &&
            <p>{el.text}</p>
          }
        </>
      )}
    </div>
  );
}

export default SectionContent;
