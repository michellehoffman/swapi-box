import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mockData/mockData';
import Controls from './Controls';

describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})