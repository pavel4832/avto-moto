import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {RATING_STARS} from "../../const";

const PopupForm = (props) => {
  const {active, setActive} = props;
  const {isPopUpOpen} = useSelector((state) => state.DATA);
  const [userFormRating, setUserFormRating] = useState(5);
  const hiddenSwitch = (isPopUpOpen) ? `openPopup` : `closePopup`;

  return (
    <section className={`page-popup message-popup ${hiddenSwitch}`}>
      <div className="message-popup__container">
        <h3 className="message-popup__title">Оставить отзыв</h3>

        <button className="message-popup__btn close-btn" type="button" aria-label="Закрыть">
          <svg className="close-btn__svg" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/>
          </svg>

        </button>

        <form className="message-popup__form message-form" action="https://echo.htmlacademy.ru" method="post">
          <div className="message-form__wrapper">
            <div className="message-form__left">
              <label className="message-form__label">
                <span className="message-form__errorText">Пожалуйста, заполните поле</span>
                <span className="message-form__required">*</span>
                <input className="message-form__field name-field" pattern="[А-Яа-яЁё]{3,}" type="text" name="name-id" placeholder="Имя"/>
              </label>

              <label className="message-form__label">
                <input className="message-form__field" pattern="[А-Яа-яЁё]{3,}" type="text" name="mail-id" placeholder="Достоинства" />
              </label>

              <label className="message-form__label">
                <input className="message-form__field" pattern="[А-Яа-яЁё]{3,}" type="text" name="mail-id" placeholder="Недостатки" />
              </label>

            </div>
            <div className="message-form__right">
              <div className="message-form__rating">
                <p className="message-form__text">Оцените товар:</p>
                <div className="message-form__stars rating">
                  {RATING_STARS.map((rating, index) => (
                    <React.Fragment key={`Rating-${index}`}>
                      <input
                        className="rating__input"
                        id={`star-${rating}`}
                        type="radio" name="rating"
                        value={rating}
                        checked={userFormRating === index + 1}
                        onChange={() => {
                          setUserFormRating(index + 1);
                        }}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <label className="message-form__label textarea-label">
                <span className="message-form__errorText">Пожалуйста, заполните поле</span>
                <span className="message-form__required">*</span>
                <textarea className="message-form__area" name="message-text" placeholder="Комментарий"></textarea>
              </label>
            </div>
          </div>
          <button className="message-form__submit button" type="submit">оставить отзыв</button>
        </form>
      </div>
    </section>
  );
};

PopupForm.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default PopupForm;
