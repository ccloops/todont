import React, {Component} from 'react';

const TextInput = ({onChange, value}) => {
  return(
    <input type='text' value={value} onChange={onChange} />
  );
 
};

export default TextInput;