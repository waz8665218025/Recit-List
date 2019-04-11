import React, { Component } from 'react';
import { HashRouter as Router,Route} from 'react-router-dom'
import List from './pages/list'
import Name from './pages/name'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route path='/' exact={true}  component={List}></Route>
            <Route path={'/pro'} component={Name}></Route>
          </div>
        </Router>
    );
  }
}

export default App;
