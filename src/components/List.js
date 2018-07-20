import React from 'react';
import PropTypes from 'prop-types';

const List = ({items}) => (
  <ul>
    {items.map((item, index) => <li key={`todo-item-${index}`}>{item}</li>)}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;