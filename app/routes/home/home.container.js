import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Home from './home.component';
import { teamsActions } from '../../modules/teams/teams.actions';
import { localesActions } from '../../modules/locales/locales.actions';
import {
  selectTeamsList, filterTeamsListBySquadValue, selectRangeValues, selectArithmeticAverage,
} from '../../modules/teams/teams.selectors';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList,
  rangeValues: selectRangeValues,
  teamsBySquadValue: filterTeamsListBySquadValue,
  arithmeticAverage: selectArithmeticAverage,
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTeams: teamsActions.getTeams,
  setLanguage: localesActions.setLanguage,
  setRangeValues: teamsActions.setRangeValues,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
