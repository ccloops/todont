import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import TextInput from './TextInput';
import List from './List';
import Submit from './Submit';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemCreation = this.handleItemCreation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange({target: {value: inputValue}}) {
    this.setState({inputValue});
  }

  handleItemCreation() {
    const {
      state: {todos, inputValue},
    } = this;

    if(inputValue.length) {
      this.setState({
        todos: [...todos, inputValue].sort(),
        inputValue: '',
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if(event.keyCode === 13) {
      this.handleItemCreation();
    }
  }

  render() {
    const {
      handleInputChange,
      handleItemCreation,
      state: {inputValue, todos},
    } = this;
    return (
      <Fragment>
        <h1>To Do or To Dont</h1>
        <TextInput onChange={handleInputChange} value={inputValue}/>
        <Submit onSubmit={handleItemCreation}/>
        <List items={todos} />
      </Fragment>
    );
  }
}