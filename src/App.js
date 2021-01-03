import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Compare from './components/Compare';
import Home from './components/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cmp" component={Compare} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
