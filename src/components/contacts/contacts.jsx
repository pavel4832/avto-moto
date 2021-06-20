import React from 'react';
import {Link} from 'react-router-dom';

const Contacts = () => {
  return (
    <section className="tabs__contacts contacts">
      <h3 className="visually-hidden">Контакты</h3>
      <ul className="contacts__list">
        <li className="contacts__item">
          <p className="contacts__title">Адрес</p>
          <p className="contacts__text contact__text--address">Санкт-Петербург,<br/> набережная реки Карповки, дом 5</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">Режим работы</p>
          <p className="contacts__text">Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">Телефон</p>
          <Link className="contacts__text">8 (800) 333-55-99</Link>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">E-mail</p>
          <Link className="contacts__text">info@avto-moto.ru</Link>
        </li>
      </ul>
      <div className="contacts__map"></div>
    </section>
  );
};

export default Contacts;
