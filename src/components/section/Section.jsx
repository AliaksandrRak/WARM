import React, { useState } from 'react';
import './Section.sass';
import SectionTitle from './SectionTitle'
import SectionContent from './SectionContent'


function Section(props) {

  return (
    <div className="home-section">
      {props.isTitleRight ?
        <SectionContent content={props.content} />
        :
        <SectionTitle title={props.title} />
      }
      {props.isTitleRight ?
        <SectionTitle title={props.title} />
        :
        <SectionContent content={props.content} />
      }
    </div>
  );
}

export default Section;
