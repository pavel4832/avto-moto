import React from 'react';

const Slider = () => {
  return (
    <section className="page-main__slider slider">
      <h3 className="visually-hidden">Фото галерея</h3>
      <img src="./img/auto1.png" alt="Фото" className="slider__main" width="600" height="375"/>
      <div className="slider__body">
        <button className="slider__control" disabled={true}>
          <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider__control--arrow">
            <path d="M1.004 6.172L6.918.369M1.004 6.172l5.689 5.797M1.004 6.172l18.977.18"/>
          </svg>
        </button>
        <img src="./img/auto1.png" alt="Фото" className="slider__main" width="128" height="80"/>
        <img src="./img/auto2.png" alt="Фото" className="slider__main" width="128" height="80"/>
        <img src="./img/auto3.png" alt="Фото" className="slider__main" width="128" height="80"/>
        <button className="slider__control">
          <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider__control--arrow">
            <path d="M18.987 6.172L13.075.369m5.912 5.803L13.3 11.969m5.687-5.797l-18.972.18"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;
