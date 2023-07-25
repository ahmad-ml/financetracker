import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Income from './pages/Income';
import Expenses from './pages/Expenses';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/income">Income</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
        </ul>
      </nav>
      
      <Switch>
        <Route path="/income">
          <Income />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
