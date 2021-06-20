import {createReducer} from '@reduxjs/toolkit';
import {CAR} from '../../mock/car';


const initialState = {
  car: CAR,
};

const Data = createReducer(initialState, () => {});

export {Data};
