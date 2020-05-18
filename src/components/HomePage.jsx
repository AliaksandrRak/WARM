import React, { useState } from 'react';
import './HomePage.sass';
import trello from '../img/trello-cards.png'
import registration from '../img/registration.png'
import signin from '../img/signin.png'
import equipment from '../img/equipment.png'
import project from '../img/project.png'
import tasks from '../img/tasks.png'
import developers from '../img/developers.png'

import Section from './section/Section'

function HomePage(props) {

  return (
    <div className="home">
      <div className="home-wrapper">
        <Section
          title={[
            { title: "Регистрация", text: "Проходит легко и непринужденно. Достаточно всего лишь открыть окно, добавить немного личных данных и вуаля: вы уже с нами!" },
          ]}
          content={[
            { img: registration, name: "trello" }
          ]}
        />
        <Section
          isTitleRight={true}
          title={[
            { title: "Вход в систему", text: "Вам необходимо добавить ваш Логин, который вы так тщательно выбрали, и Пароль, который вы точно записали на бумажке." },
          ]}
          content={[
            { img: signin, name: "trello" }
          ]}
        />
        <Section
          title={[
            { title: "Добавление оборудования", text: "Вы не можете запомнить, сколько у вас оборудования и где оно хранится? Тогда вы пришли по адресу. Просто запишите эту информацию в форму и мы всегда сможем подсказать: где, в каком состоянии и у кого ваша вещь!" },
          ]}
          content={[
            { img: equipment, name: "trello" }
          ]}
        />
        <Section
        isTitleRight={true}
          title={[
            { title: "Добавление Проектов", text: "Вы хотите создавать задачи, но не знаете как? Для начала Вам поможет создание Проекта, ведь любой задаче нужен проект, поверьте. Так что добавляйте ваши данные в форму и скорее спускайтесь ниже." },
          ]}
          content={[
            { img: project, name: "trello" }
          ]}
        />
        <Section
          title={[
            { title: "Добавление Задач", text: "И вот наконец-то вы можете добавить задачу... осталось только заполнить ещё одну маленькую форму." },
          ]}
          content={[
            { img: tasks, name: "trello" }
          ]}
        />
        <Section
        isTitleRight={true}
          title={[
            { title: "Добавление Персонала", text: "Ваша компания стала мировым гигантом и не хватает пальцев, чтобы пересчитать всех сотрудников? Не беда! Ведь теперь у нас есть форма для добавления пользователей. P.S. не забудьте её заполнить" },
          ]}
          content={[
            { img: developers, name: "trello" }
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
