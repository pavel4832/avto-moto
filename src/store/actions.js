import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_PHOTO: `data/changePhoto`,
  CHANGE_TAB: `data/changeTab`,
  OPEN_POPUP: `data/openPopUp`,
  CLOSE_POPUP: `data/closePopUp`
};

export const changePhoto = createAction(ActionType.CHANGE_PHOTO, (newPhoto) => {
  return {
    payload: newPhoto,
  };
});

export const changeTab = createAction(ActionType.CHANGE_TAB, (newTab) => {
  return {
    payload: newTab,
  };
});

export const openPopUp = createAction(ActionType.OPEN_POPUP);

export const closePopUp = createAction(ActionType.CLOSE_POPUP);
