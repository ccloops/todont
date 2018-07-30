import React, { Component } from 'react';
import styled from 'styled-components';

const StarContainer = styled.ul`
  height: 3em;
  width: 15em;  
  border: 2px solid black;
  list-style: none;
  padding: 0;
`;

const Star = styled.li`
  height: 3em;
  width: 3em;
  display: inline-block;
  position: relative;
  svg {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 1em;
  }
`;

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    
    const rating = localStorage.getItem('rating');

    this.state = { 
      rating: rating || 0,
      hasVoted: false,
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    localStorage.setItem('rating', this.state.rating);
  }

  setFill(isHighlighted) {
    return isHighlighted ? '#F8C444' : '#ccc';
  }

  render() {
    const {
      handleHover,
      handleMouseOut,
      handleClick,
      setFill,
      state: { rating },
    } = this;

    return (
      <StarContainer>
        {new Array(5).fill(null).map((item, index) => (
          <Star 
            key={`todo-item-${index}`}
            onMouseOver={() => handleHover(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
          >
            <svg height="25" width="23" fill={setFill((index + 1) <= rating)}>
              <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
          </Star>)
        )}
      </StarContainer>
    );
  }
}


