import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <App/>
      </Fragment>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));