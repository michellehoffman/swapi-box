import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mockData/mockData';
import Controls from './Controls';

describe('Controls', () => {
  let wrapper;

  const mockFavorites = [{
    name: "LukeSkywalker",
    type: "people",
  }]

  const mockSetCurrent = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Controls favorites={ mockFavorites }
                                setCurrent={ mockSetCurrent }
                                active="people" />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})