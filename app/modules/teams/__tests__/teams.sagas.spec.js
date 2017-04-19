import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { sandbox } from 'sinon';

import teamsSaga from '../teams.sagas';
import * as requestModule from '../../../utils/request';
import { teamsActions } from '../teams.actions';


describe('Teams: sagas', () => {
  let sagaTester = null;
  let teamsSandbox = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(teamsSaga);

    teamsSandbox = sandbox.create();
    teamsSandbox.stub(global, 'fetch').callsFake(() => Promise.resolve({
      json: () => {},
    }));
  });

  afterEach(() => {
    teamsSandbox.restore();
  });

  describe('fetchTeamsSaga', () => {
    it('should pass proper params to get', () => {
      teamsSandbox.stub(requestModule, 'request').callsFake(() => 'somedata');

      sagaTester.dispatch(teamsActions.getTeams());

      expect(requestModule.request.firstCall.args[0])
        .to.equal('http://api.football-data.org/v1/competitions/398/teams');
    });

    it('should dispatch getTeamsSuccess action after successful API call', () => {
      teamsSandbox.stub(requestModule, 'request').callsFake(() => 'somedata');

      sagaTester.dispatch(teamsActions.getTeams());

      expect(sagaTester.getCalledActions()).to.include(teamsActions.getTeamsSuccess('somedata'));
    });

    it('should dispatch getTeamsError action after not successful API call', () => {
      teamsSandbox.stub(requestModule, 'request').callsFake(() => { throw 'error'; });


      sagaTester.dispatch(teamsActions.getTeams());

      expect(sagaTester.getCalledActions()).to.include(teamsActions.getTeamsError('error'));
    });
  });
});
