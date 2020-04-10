import React, { useState } from 'react';
import './HomePage.sass';
import trello from '../img/trello-cards.png'
import Section from './section/Section'

function HomePage(props) {

  return (
    <div className="home">
      <div className="home-wrapper">
        <Section
          title={[
            { title: "Title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
            { title: "Title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          ]}
          content={[
            { img: trello, name: "trello" }
          ]}
        />
        <Section
          isTitleRight={true}
          title={[
            { title: "Title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
            { title: "Title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          ]}
          content={[
            { img: trello, name: "trello" }
          ]}
        />
        <Section
          title={[
            { title: "Title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
            { title: "Title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          ]}
          content={[
            { img: trello, name: "trello" }
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
