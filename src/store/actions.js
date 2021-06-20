import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_PHOTO: `data/changePhoto`,
  CHANGE_TAB: `data/changeTab`,
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
