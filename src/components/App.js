import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import TextInput from './TextInput';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({target: {value: inputValue}}) {
    this.setState({inputValue});
  }


  render() {
    const {
      handleInputChange,
      state: {inputValue, todos},
    } = this;
    return (
      <Fragment>
        <TextInput onChange={handleInputChange} value={inputValue}/>
        <List items={todos} />
        <h1>hello</h1>
      </Fragment>
    );
  }
}