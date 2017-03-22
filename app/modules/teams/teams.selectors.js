import { createSelector } from 'reselect';
import { toNumber } from 'lodash';

const MULTIPLIER = 1000000;


const selectTeamsDomain = state => state.get('teams');

export const selectTeamsList = createSelector(
  selectTeamsDomain, state => state.get('list')
);

export const selectRangeValues = createSelector(
  selectTeamsDomain, state => state.get('rangeValues')
);

export const filterTeamsListBySquadValue = createSelector(
  selectTeamsList,
  selectRangeValues,
  (teams, rangeValues) => teams.filter((team) => {
    const squadMarket = toNumber(team.get('squadMarketValue').replace(' €', '').replace(/,/g, ''));

    return squadMarket > rangeValues.min() * MULTIPLIER && squadMarket < rangeValues.max() * MULTIPLIER;
  })
);
