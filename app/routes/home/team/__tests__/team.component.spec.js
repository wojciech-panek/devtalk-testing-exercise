import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import Team from '../team.component';


describe('Team: Component', () => {
  const defaultProps = {
    data: fromJS({ name: 'teamName', crestUrl: 'http://some-url.com', squadMarketValue: '100 EUR' }),
  };

  const component = (props) => (
    <Team {...defaultProps} {...props} />
  );

  it('should render team root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team')).to.have.length(1);
  });

  it('should render logo element', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team').find('.team-logo')).to.have.length(1);
  });

  it('should set proper style to logo element', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team').find('.team-logo').prop('style').backgroundImage).to.equal('url(http://some-url.com)');
  });

  it('should render name element', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team').find('.team-name')).to.have.length(1);
  });

  it('should render proper text in name element', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team').find('.team-name').render().text()).to.equal('teamName,');
  });

  it('should render name value', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team').find('.team-value')).to.have.length(1);
  });

  it('should render proper text in value element', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.team').find('.team-value').render().text()).to.equal('100 EUR');
  });
});
