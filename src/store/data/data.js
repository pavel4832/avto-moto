import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {CAR} from '../../mock/car';
import {TABS_TYPE} from '../../const';


const initialState = {
  car: CAR,
  photoNumber: 0,
  tabsType: TABS_TYPE.SPECIFICATION,
};

const Data = createReducer(initialState, (builder) => {
  builder.addCase(actions.changePhoto, (state, action) => {
    return {
      ...state,
      photoNumber: action.payload,
    };
  });

  builder.addCase(actions.changeTab, (state, action) => {
    return {
      ...state,
      tabsType: action.payload,
    };
  });
});

export {Data};
