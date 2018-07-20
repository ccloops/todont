import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TextInput = ({onChange, value}) => {
  return(
    <input type='text' value={value} onChange={onChange} />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;