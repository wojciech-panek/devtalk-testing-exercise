import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { ACTION_TYPES } from './teams.constants';


const StateRecord = new Record({
  list: List(),
  rangeValues: fromJS({
    min: 0,
    max: 600,
  }),
});

export const INITIAL_STATE = new StateRecord();

export const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('list', fromJS(action.payload.teams));
export const setRangeValues = (state = INITIAL_STATE, action) => state.set('rangeValues', fromJS(action.values));

export const HANDLERS = {
  [ACTION_TYPES.GET_SUCCESS]: getSuccessHandler,
  [ACTION_TYPES.SET_RANGE_VALUES]: setRangeValues,
};

export default createReducer(INITIAL_STATE, HANDLERS);
