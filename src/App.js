import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';


const App = () => (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default App;
