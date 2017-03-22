import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import InputRange from 'react-input-range';

import messages from './rangeSelector.messages';

const MIN_VALUE = 0;
const MAX_VALUE = 600;

export default class RangeSelector extends PureComponent {
  static propTypes = {
    rangeValues: PropTypes.object,
    setRangeValues: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  changeRangeValue = (value) => {
    this.props.setRangeValues(value);
  };

  render() {
    if (!this.props.rangeValues) {
      return null;
    }

    return (
      <div className="range-selector">
        <InputRange
          maxValue={MAX_VALUE}
          minValue={MIN_VALUE}
          formatLabel={value => `${value}`}
          value={this.props.rangeValues.toJS()}
          onChange={value => this.changeRangeValue(value)}
        />
      </div>
    );
  }
}
