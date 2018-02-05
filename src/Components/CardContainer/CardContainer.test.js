import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mockData/mockData';
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    const mockArray = mockData.people.results;
    const mockAddFavorite = jest.fn();

    wrapper = shallow(<CardContainer arrayToDisplay={ mockArray } 
                                     addFavorite={ mockAddFavorite } />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})