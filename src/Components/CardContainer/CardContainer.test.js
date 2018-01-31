import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mockData/mockData';
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    const array = mockData.people.results;

    wrapper = shallow(<CardContainer arrayToDisplay={ array } />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})