import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { FormattedMessage } from 'react-intl';

import TeamsList from '../teamsList.component';
import Team from '../../team/team.component';
import messages from '../teamsList.messages';


describe('TeamsList: Component', () => {
  const defaultProps = {
    items: fromJS(['item1', 'item2']),
  };

  const component = (props) => (
    <TeamsList {...defaultProps} {...props} />
  );

  it('should render teams list root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.teams-list')).to.have.length(1);
  });

  it('should render teams list title root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.teams-list__title')).to.have.length(1);
  });

  it('should render title message inside .teams-list__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.teams-list__title').find(FormattedMessage).prop('id')).to.be.equal(messages.title.id);
  });

  it('should render proper number of <Team />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(Team)).to.have.length(defaultProps.items.size);
  });

  it('should pass item prop to <Team />', () => {
    const wrapper = shallow(component({}));

    defaultProps.items.forEach((item, index) => {
      expect(wrapper.find(Team).at(index).prop('data')).to.equal(item);
    });

    expect(wrapper.find(Team)).to.have.length(defaultProps.items.size);
  });
});
