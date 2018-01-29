import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OpeningCrawl from './OpeningCrawl';

describe('OpeningCrawl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OpeningCrawl />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a class name of .Crawl', () => {
    expect(wrapper.find('div').hasClass('crawl')).toEqual(true);
  });

  it('should receive props of crawl', () => {
    expect(wrapper.props().crawl).toBeDefined();
  });

  it('should render the opening crawl, film title, and release date', () => {
    expect(wrapper.find('.crawl-text').text).toEqual("It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....");
    expect(wrapper.find('.film-title').text).toEqual('A New Hope');
    expect(wrapper.find('.release-date').text).toEqual('1977-05-25');
  });

});