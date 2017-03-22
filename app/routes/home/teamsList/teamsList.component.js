import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import InputRange from 'react-input-range';

import messages from './teamsList.messages';
import Team from '../team/team.component';

const MIN_VALUE = 0;
const MAX_VALUE = 600;

export default class TeamsList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
    setRangeValues: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      value: {
        min: MIN_VALUE,
        max: MAX_VALUE,
      },
    };
  }

  componentWillMount() {
    this.props.setRangeValues(this.state.value);
  }

  changeRangeValue = (value) => {
    this.props.setRangeValues(value);
    this.setState({ value });
  };

  render() {
    return (
      <div className="teams-list">
        <h2 className="teams-list__title">
          <FormattedMessage {...messages.title} />:
        </h2>

        <InputRange
          maxValue={MAX_VALUE}
          minValue={MIN_VALUE}
          formatLabel={value => `${value} mln €`}
          value={this.state.value}
          onChange={value => this.changeRangeValue(value)}
        />

        <ul className="teams-list__items">
          {this.props.items.toArray().map((item, key) => (
            <Team key={key} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}
