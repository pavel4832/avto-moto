import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Specifications from '../specification-list/specification-list';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import {TABS_TYPE} from '../../const';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TABS_TYPE.SPECIFICATION);

  const TabContent = () => {
    switch (activeTab) {
      case TABS_TYPE.SPECIFICATION:
        return (
          <Specifications />
        );
      case TABS_TYPE.REVIEWS:
        return (
          <Reviews />
        );
      case TABS_TYPE.CONTACTS:
        return (
          <Contacts />
        );
    }

    return ``;
  };
  return (
    <section className="page-main__tabs tabs">
      <h3 className="visually-hidden">Информация</h3>
      <div className="tabs__wrapper">
        <ul className="tabs__menu">
          <li className="tabs__item">
            <Link
              to="#"
              className={`tabs__link ${activeTab === TABS_TYPE.SPECIFICATION ? `tabs__link--active` : ``}`}
              onClick={() => setActiveTab(TABS_TYPE.SPECIFICATION)}
            >Характеристики</Link>
          </li>
          <li className="tabs__item">
            <Link
              to="#"
              className={`tabs__link ${activeTab === TABS_TYPE.REVIEWS ? `tabs__link--active` : ``}`}
              onClick={() => setActiveTab(TABS_TYPE.REVIEWS)}
            >Отзывы</Link>
          </li>
          <li className="tabs__item">
            <Link
              to="#"
              className={`tabs__link ${activeTab === TABS_TYPE.CONTACTS ? `tabs__link--active` : ``}`}
              onClick={() => setActiveTab(TABS_TYPE.CONTACTS)}
            >Контакты</Link>
          </li>
        </ul>
        <div className="tabs__body">
          <TabContent />
        </div>
      </div>
    </section>
  );
};

export default Tabs;
