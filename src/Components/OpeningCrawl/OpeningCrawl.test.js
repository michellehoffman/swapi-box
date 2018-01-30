import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mockData/mockData';
import OpeningCrawl from './OpeningCrawl';

describe('OpeningCrawl', () => {
  let wrapper;

  beforeEach(() => {
    const crawlData = mockData.films.results[0]

    wrapper = shallow(<OpeningCrawl { ...crawlData } />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});