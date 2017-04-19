import { expect } from 'chai';
import { fromJS, List } from 'immutable';

import teamsReducer from '../teams.reducer';
import { teamsActionsTypes } from '../teams.actions';


describe('Teams: reducer', () => {
  const state = fromJS({
    list: List(),
    rangeValues: fromJS({
      min: 0,
      max: 600,
    }),
    error: null,
  });

  it('should return initial state', () => {
    expect(teamsReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
  });

  it('should return state on unknown action', () => {
    expect(teamsReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
  });

  it('should set teams on GET_TEAMS_SUCCESS', () => {
    const teams = ['team1', 'team2'];
    const expectedState = state.set('list', fromJS(teams));
    const action = { payload: { teams }, type: teamsActionsTypes.GET_TEAMS_SUCCESS };
    expect(teamsReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
  });

  it('should set error on GET_TEAMS_ERORR', () => {
    const error = 'some-error';
    const expectedState = state.set('error', error);
    const action = { payload: { error }, type: teamsActionsTypes.GET_TEAMS_ERORR };
    expect(teamsReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
  });

  it('should set rangeValues on SET_RANGE_VALUES', () => {
    const values = { min: 0, max: 100 };
    const expectedState = state.set('rangeValues', fromJS(values));
    const action = { values, type: teamsActionsTypes.SET_RANGE_VALUES };
    expect(teamsReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
  });
});
