import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import {
  selectTeamsList,
  selectRangeValues,
  filterTeamsListBySquadValue,
  selectArithmeticAverage,
} from '../teams.selectors';

describe('Teams: selectors', () => {
  const list = fromJS([
    { name: 'team1', squadMarketValue: '50 €' },
    { name: 'team2', squadMarketValue: '200 €' },
    { name: 'team3', squadMarketValue: '2000 €' },
  ]);
  const rangeValues = { min: () => 0.0001, max: () => 0.001 };

  const mockedState = Map({
    teams: Map({
      list,
      rangeValues,
    }),
  });

  describe('selectTeamsList', () => {
    it('should select list', () => {
      expect(selectTeamsList(mockedState).toJS()).to.deep.equal(list.toJS());
    });
  });

  describe('selectRangeValues', () => {
    it('should select list', () => {
      expect(selectRangeValues(mockedState)).to.deep.equal(rangeValues);
    });
  });

  describe('filterTeamsListBySquadValue', () => {
    it('should select list', () => {
      expect(filterTeamsListBySquadValue(mockedState).toJS())
        .to.deep.equal([{ name: 'team2', squadMarketValue: '200 €' }]);
    });
  });

  describe('selectArithmeticAverage', () => {
    it('should select list', () => {
      expect(selectArithmeticAverage(mockedState)).to.equal(10);
    });
  });
});
