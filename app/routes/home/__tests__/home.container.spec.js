import { expect } from 'chai';
import { spy } from 'sinon';

import { mapDispatchToProps } from '../home.container';
import { localesActions } from '../../../modules/locales/locales.actions';
import { teamsActions } from '../../../modules/teams/teams.actions';


describe('Home: Container', () => {
  describe('mapDispatchToProps', () => {
    it('should call LocalesActions.setLanguage', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).setLanguage();

      expect(dispatch.firstCall.args[0]).to.deep.equal(localesActions.setLanguage());
    });
    it('should call TeamsActions.getTeams', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).getTeams();

      expect(dispatch.firstCall.args[0]).to.deep.equal(teamsActions.getTeams());
    });
    it('should call TeamsActions.setRangeValues', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).setRangeValues();

      expect(dispatch.firstCall.args[0]).to.deep.equal(teamsActions.setRangeValues());
    });
  });
});
