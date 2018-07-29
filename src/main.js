import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import App from './components/app.js';

class Main extends Component {
  render() {
    return (
      <App/>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));