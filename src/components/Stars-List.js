import React, { Component } from 'react';

import './Stars-List.scss';

export default class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hasVoted: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(index) {
    this.setState({ rating: index + 1 });
  }

  handleMouseOut() {
    if(this.state.hasVoted) {
      return;
    }
    this.setState({ rating: 0 });
  }

  handleClick(index) {
    this.setState({ hasVoted: true });
  }

  setColor(isHighlighted) {
    return isHighlighted ? 'yellow' : 'gray';
  }

  render() {
    const {
      handleHover,
      handleMouseOut,
      handleClick,
      setColor,
      state: {rating},
    } = this;
    return(
      <ul>
        {new Array(5).fill(null).map((item, index) => (
          <li
            key={`star-item-${index}`}
            onMouseOver={() => handleHover(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
            style={{color: setColor((index + 1) <= rating)}}
          >*</li>
        ))}
      </ul>
    );
  }
}