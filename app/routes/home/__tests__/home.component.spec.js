import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import Home from '../home.component';
import messages from '../home.messages';
import LanguageSelector from '../languageSelector/languageSelector.component';
import AverageValue from '../averageValue/averageValue.component';
import TeamsList from '../teamsList/teamsList.component';
import RangeSelectorContainer from '../rangeSelector/rangeSelector.component';

describe('Home: Component', () => {
  const defaultProps = {
    teams: { test: ['test', 'test2', 'test3'] },
    teamsBySquadValue: { test: ['test3', 'test2', 'test'] },
    rangeValues: { test: 'test' },
    language: 'en',
    getTeams: () => {
    },
    setLanguage: () => {
    },
    setRangeValues: () => {
    },
    arithmeticAverage: 150000000,
    router: {},
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  it('should render Home root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home')).to.have.length(1);
  });

  it('should render <Helmet/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(Helmet)).to.have.length(1);
  });

  it('should pass title prop to <Helmet/>', () => {
    const wrapper = shallow(component({}));
    const helmetProps = wrapper.find(Helmet).props();

    expect(helmetProps.title).to.be.a('string');
  });

  it('should render .home__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home__title')).to.have.length(1);
  });

  it('should render welcome message inside .home__title', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.home__title').find(FormattedMessage).prop('id')).to.be.equal(messages.welcome.id);
  });

  it('should render <LanguageSelector />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(LanguageSelector)).to.have.length(1);
  });

  it('should pass props to <LanguageSelector />', () => {
    const setLanguage = spy();
    const wrapper = shallow(component({ setLanguage }));
    const languageSelectorProps = wrapper.find(LanguageSelector).props();

    expect(languageSelectorProps.language).to.be.equal(defaultProps.language);
    expect(languageSelectorProps.router).to.be.equal(defaultProps.router);

    languageSelectorProps.setLanguage();
    expect(setLanguage.calledOnce).to.be.equal(true);
  });

  it('should render <AverageValue />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(AverageValue)).to.have.length(1);
  });

  it('should pass arithmeticAverage prop to <AverageValue />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(AverageValue).prop('arithmeticAverage')).to.be.equal(defaultProps.arithmeticAverage);
  });

  it('should render <RangeSelector/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(RangeSelectorContainer)).to.have.length(1);
  });

  it('should pass props to <RangeSelector />', () => {
    const setRangeValues = spy();
    const wrapper = shallow(component({ setRangeValues }));
    const rangeSelectorProps = wrapper.find(RangeSelectorContainer).props();

    expect(rangeSelectorProps.rangeValues).to.be.equal(defaultProps.rangeValues);

    rangeSelectorProps.setRangeValues();
    expect(setRangeValues.calledOnce).to.be.equal(true);
  });

  it('should render <TeamsList/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(TeamsList)).to.have.length(1);
  });

  it('should pass items prop to <TeamsList />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(TeamsList).prop('items')).to.deep.equal(defaultProps.teamsBySquadValue);
  });

  it('should dispatch getTeams action on mount', () => {
    const getTeams = spy();
    shallow(component({ getTeams }));

    expect(getTeams.callCount).to.be.equal(1);
  });
});
