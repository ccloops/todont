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
  background-color: lightGray;
  height: 3em;
  width: 3em;
  display: inline-block;
  outline: 2px solid blue;
`;

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: null };

    this.handleStarHover = this.handleStarHover.bind(this);
  }

  handleStarHover(index) {
    this.setState({ rating: index + 1 });
  }

  render() {
    const {
      handleStarHover,
    } = this;

    return (
      <StarContainer>

        {new Array(5).fill(null).map((item, index) => (
          <Star 
            key={`todo-item-${index}`}
            index={index}
            onMouseOver={handleStarHover}
          >
            {item}
          </Star>)
        )}
      </StarContainer>
    );
  }
}

