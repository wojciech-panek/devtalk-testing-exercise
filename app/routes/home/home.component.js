import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import TeamsList from './teamsList/teamsList.component';
import LanguageSelector from './languageSelector/languageSelector.component';


export default class Home extends PureComponent {
  static propTypes = {
    teams: PropTypes.object,
    teamsBySquadValue: PropTypes.object,
    language: PropTypes.string.isRequired,
    getTeams: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    setRangeValues: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.getTeams();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teams.rangeValues !== this.props.teams.rangeValues) {
      this.props.getTeams();
    }
  }

  render() {
    return (
      <div className="home">

        <Helmet
          title="Homepage"
        />

        <div className="home__header">
          <h1 className="home__title">
            <i className="home__title-logo" />
            <FormattedMessage {...messages.welcome} />
          </h1>

        </div>

        <TeamsList
          items={this.props.teamsBySquadValue}
          setRangeValues={this.props.setRangeValues}
        />

        <LanguageSelector
          language={this.props.language}
          setLanguage={this.props.setLanguage}
          router={this.props.router}
        />
      </div>
    );
  }
}
