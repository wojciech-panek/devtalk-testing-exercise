import React, { PropTypes, PureComponent } from 'react';


export default class Team extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };


  render() {

    const spanStyle = {
      color: 'blue',
      backgroundImage: 'url(' + this.props.data.get('crestUrl') + ')',
    };
    return (
      <li className="team">
        <span className="team-logo" style={spanStyle}></span>
        <span className="team-name">{this.props.data.get('name')}</span>
      </li>
    );
  }
}
