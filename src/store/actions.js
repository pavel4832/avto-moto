import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_PHOTO: `data/changePhoto`,
};

export const changePhoto = createAction(ActionType.CHANGE_PHOTO, (newPhoto) => {
  return {
    payload: newPhoto,
  };
});
