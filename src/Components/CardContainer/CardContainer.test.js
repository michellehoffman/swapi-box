import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mockData/mockData';
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})