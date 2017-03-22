import { call, put, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import envConfig from '../../environment/base';

import request from '../../utils/request';
import { getTeamsSuccess, getTeamsError } from './teams.actions';
import { ACTION_TYPES } from './teams.constants';


export function* fetchTeamsSaga() {
  const sagaFetchingOptions = {
    method: 'GET',
    headers: {
      'X-Auth-Token': envConfig.api.key,
    },
  };

  try {
    const data = yield call(request, `${envConfig.api.baseUrl}${envConfig.api.urls.teams}`, sagaFetchingOptions);

    yield put(getTeamsSuccess(data));
  } catch (e) {
    yield put(getTeamsError(e));
  }
}

export function* getTeamsSaga() {
  try {
    yield call(takeLatest, ACTION_TYPES.GET, fetchTeamsSaga);
  } catch (e) {
    yield put(getTeamsError(e));
  }
}

export default function* teamsSaga() {
  yield [
    fork(getTeamsSaga),
  ];
}
