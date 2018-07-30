import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarContainer = styled.ul`
  height: 3em;
  width: 15em;  
  border: 2px solid black;
  list-style: none;
  padding: 0;
`;

const Star = styled.li`
  background-color: ${({ isHighlighted, isCurrent }) => {
    if(isCurrent) {
      return '#FFDE5E';
    } else if (isHighlighted) {
      return '#F8C444';
    } else {
      return '#ccc';
    }
  }};
  height: 3em;
  width: 3em;
  display: inline-block;
  outline: 2px solid blue;
`;

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rating: 0,
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
  }

  render() {
    const {
      handleHover,
      handleMouseOut,
      handleClick,
      state: { rating },
    } = this;

    return (
      <StarContainer>

        {new Array(5).fill(null).map((item, index) => (
          <Star 
            key={`todo-item-${index}`}
            isCurrent={(index + 1) === rating}
            onMouseOver={() => handleHover(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
            isHighlighted={(index + 1) <= rating}
          >
            {item}
          </Star>)
        )}
      </StarContainer>
    );
  }
}

