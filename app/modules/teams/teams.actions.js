import { ACTION_TYPES } from './teams.constants';


export function getTeams() {
  return {
    type: ACTION_TYPES.GET,
  };
}

export function getTeamsSuccess(data) {
  return {
    type: ACTION_TYPES.GET_SUCCESS,
    payload: data,
  };
}

export function getTeamsError(error) {
  return {
    type: ACTION_TYPES.GET_FAIL,
    payload: error,
    error: true,
  };
}

export function setRangeValues(values) {
  return {
    type: ACTION_TYPES.SET_RANGE_VALUES,
    values,
  };
}

