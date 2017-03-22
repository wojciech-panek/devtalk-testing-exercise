import { createSelector } from 'reselect';
import { toNumber } from 'lodash';


const selectTeamsDomain = () => (state) => state.get('teams');

export const selectTeamsList = () => createSelector(
  selectTeamsDomain(), state => state.get('list')
);

export const filterTeamsListBySquadValue = () => createSelector(
  selectTeamsList(), data => data.filter((team) => {
    const squadMarket = team.get('squadMarketValue').replace(' €', '').replace(/,/g, '.');
  })
);
