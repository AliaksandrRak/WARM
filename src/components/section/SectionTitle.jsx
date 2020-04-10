import React, { useState } from 'react';
import './Section.sass';

function SectionTitle(props) {

  return (
    <div className="home-section-title">
      {props.title && props.title.map((el, index) =>
        <>
          {el.title &&
            <h2>{el.title}</h2>
          }
          {el.text &&
            <p>{el.text}</p>
          }
        </>
      )}
    </div>
  );
}

export default SectionTitle;
