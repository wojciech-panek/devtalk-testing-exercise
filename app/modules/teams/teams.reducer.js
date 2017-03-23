import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamsActionsTypes } from './teams.actions';

const StateRecord = new Record({
  list: List(),
  rangeValues: fromJS({
    min: 0,
    max: 600,
  }),
});

const INITIAL_STATE = new StateRecord();

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('list', fromJS(action.payload.teams));
const setRangeValues = (state = INITIAL_STATE, action) => state.set('rangeValues', fromJS(action.values));

const HANDLERS = {
  [teamsActionsTypes.GET_TEAMS_SUCCESS]: getSuccessHandler,
  [teamsActionsTypes.SET_RANGE_VALUES]: setRangeValues,
};

export default createReducer(INITIAL_STATE, HANDLERS);
