import React from 'react';
import {Link} from "react-router-dom";
import Specifications from "../specification-list/specification-list";

const Tabs = () => {
  return (
    <section className="page-main__tabs tabs">
      <h3 className="visually-hidden">Информация</h3>
      <div className="tabs__wrapper">
        <ul className="tabs__menu">
          <li className="tabs__item">
            <Link className="tabs__link tabs__link--active">Характеристики</Link>
          </li>
          <li className="tabs__item">
            <Link className="tabs__link">Отзывы</Link>
          </li>
          <li className="tabs__item">
            <Link className="tabs__link">Контакты</Link>
          </li>
        </ul>
        <div className="tabs__body">
          <Specifications />
        </div>
      </div>
    </section>
  );
};

export default Tabs;