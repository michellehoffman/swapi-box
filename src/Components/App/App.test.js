import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockData from '../../mockData/mockData';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('should have a default state', () => {
    const expected = {
      people: [],
      favorites: [],
      current: null
    }
    expect(wrapper.state()).toEqual(expected)
  });

  it('should set state of current to the correct element', () => {
    wrapper.instance().dataToDisplay('people');

    expect(wrapper.state().current).toEqual('people');
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

