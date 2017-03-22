import React, { PropTypes, PureComponent } from 'react';


export default class Team extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <li className="team">
        {this.props.data.get('firstName')} {this.props.data.get('lastName')} &lt;{this.props.data.get('email')}&gt;
      </li>
    );
  }
}
