import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import AverageValue from '../averageValue.component';
import messages from '../averageValue.messages';


describe('AverageValue: Component', () => {
  const defaultProps = {
    arithmeticAverage: 150000000,
  };

  const component = (props) => (
    <AverageValue {...defaultProps} {...props} />
  );

  it('should render AverageValue root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.average-value')).to.have.length(1);
  });

  it('should pass props to FormattedMessage', () => {
    const wrapper = shallow(component({}));
    const formattedMessageProps = wrapper.find(FormattedMessage).props();

    expect(formattedMessageProps.values.value).to.deep.equal(defaultProps.arithmeticAverage);
    expect(formattedMessageProps.id).to.equal(messages.info.id);
  });
});
