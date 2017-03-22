import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './teamsList.messages';
import Team from '../team/team.component';
import InputRange from 'react-input-range';

export default class TeamsList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      value: {
        min: 100,
        max: 200
      }
    };
  }


  render() {
    return (
      <div className="teams-list">
        <h2 className="teams-list__title">
          <FormattedMessage {...messages.title} />:
        </h2>

        <InputRange
          maxValue={600}
          minValue={0}
          formatLabel={value => `${value} mln €`}
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onChangeComplete={value => console.log(value)} />

        <ul className="teams-list__items">
          {this.props.items.toArray().map((item, key) => (
            <Team key={key} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}
