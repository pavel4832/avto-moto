import React from 'react';

const Description = () => {
  return (
    <section className="page-main__description description">
      <h3 className="description__title">Марпех 11</h3>
      <ul className="description__list">
        <li className="description__item">
          <span className="description__element--icon">
            <img src="./img/engine.svg" alt="тип топлива" width="24" height="22"/>
          </span>
          <span className="description__text">бензин</span>
        </li>
        <li className="description__item">
          <span className="description__element--icon">
            <img src="./img/gear.svg" alt="тип топлива" width="26" height="24"/>
          </span>
          <span className="description__text">механика</span>
        </li>
        <li className="description__item">
          <span className="description__element--icon">
            <img src="./img/power.svg" alt="тип топлива" width="32" height="21"/>
          </span>
          <span className="description__text">100 л.с.</span>
        </li>
        <li className="description__item">
          <span className="description__element--icon">
            <img src="./img/volume.svg" alt="тип топлива" width="30" height="23"/>
          </span>
          <span className="description__text">1.4 л</span>
        </li>
      </ul>
      <div className="description__priceList">
        <span className="desription__price description__price--new">2 300 000 ₽</span>
        <span className="desription__price description__price--old">2  400 000 ₽</span>
      </div>
      <button className="description__order button">оставить заявку</button>
      <button className="description__loan button">В КРЕДИТ ОТ 11 000 ₽</button>
    </section>
  );
};

export default Description;
