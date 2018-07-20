import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({onSubmit}) => (
  <button onClick={onSubmit}>Add To List</button>
);

Submit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Submit;