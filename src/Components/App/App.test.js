import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('shold have a class name of .App', () => {
    expect(wrapper.find('div').hasClass('App')).toEqual(true);
  });

});

