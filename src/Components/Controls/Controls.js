import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    }
  }

  getElement = e => {
    let value = e.target.innerText;
    value = value.includes('favorites') ? 'favorites' : value

    this.setState({ active: value });
    this.props.dataToDisplay(value);
  }

  setClass = buttonType => {
    return buttonType === this.state.active ? ' controls active' : 'controls inactive';
  }

  num = () => {
    return this.props.favorites ? this.props.favorites.length : 0;
  } 

  render() {
    return (
      <div>
        <div>
          <button className={ this.setClass('people') } 
                  onClick={ this.getElement }>people</button>
          <button className={ this.setClass('planets') }
                  onClick={ this.getElement }>planets</button>
          <button className={ this.setClass('vehicles') } 
                  onClick={ this.getElement }>vehicles</button>
        </div>
        <div>
          <button className={ this.setClass('favorites') }
                  id="favorites-button"
                  onClick={ this.getElement }>favorites <span id="num-faves">{ this.num() }</span></button>
        </div>
      </div> 
    )
  }
}

export default Controls;