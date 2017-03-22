import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './home.component';
import { getTeams, setRangeValues } from '../../modules/teams/teams.actions';
import { setLanguage } from '../../modules/locales/locales.actions';
import { selectTeamsList, filterTeamsListBySquadValue } from '../../modules/teams/teams.selectors';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList(),
  teamsBySquadValue: filterTeamsListBySquadValue(),
  language: selectLocalesLanguage(),
});

export default connect(mapStateToProps, {
  getTeams,
  setLanguage,
  setRangeValues,
})(Home);
