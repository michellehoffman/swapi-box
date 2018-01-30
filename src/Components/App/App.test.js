import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockData from '../../mockData/mockData';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a default state Favorites of an empty array', () => {
    expect(wrapper.state().favorites).toEqual([]);
  })

  it('should render an OpeningCrawl component', () => {
    expect(wrapper.find('OpeningCrawl').length).toEqual(1);
  });

  it('should select a random film to pass to OpeningCrawl component', () => {
    const crawlData = mockData.films.results;
    const expected = crawlData[0];

    expect(wrapper.instance().getRandomFilm(crawlData)).toEqual(expected);
  });

});

