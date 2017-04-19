import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { spy } from 'sinon';
import InputRange from 'react-input-range';

import { RangeSelector } from '../rangeSelector.component';


describe('RangeSelector: Component', () => {
  const defaultProps = {
    rangeValues: fromJS({
      min: 0,
      max: 600,
    }),
    setRangeValues: () => {},
    intl: {},
  };

  const component = (props) => (
    <RangeSelector {...defaultProps} {...props} />
  );

  it('should render rangeSelector root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.range-selector')).to.have.length(1);
  });

  it('should render <InputRange /> component', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(InputRange)).to.have.length(1);
  });

  it('should pass props to <InputRange />', () => {
    const wrapper = shallow(component({}));
    const rangeSelectorProps = wrapper.find(InputRange).props();

    expect(rangeSelectorProps.minValue).to.equal(0);
    expect(rangeSelectorProps.maxValue).to.equal(600);
    expect(rangeSelectorProps.value).to.deep.equal({ min: 0, max: 600 });
  });

  it('should dispatch setRangeValues action', () => {
    const setRangeValues = spy();
    const wrapper = shallow(component({ setRangeValues }));

    wrapper.find(InputRange).prop('onChange')('some-value');

    expect(setRangeValues).to.have.been.calledWith('some-value');
  });
});
