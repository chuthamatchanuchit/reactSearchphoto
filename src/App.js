import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import home from './page/Home';
import userprofile from './page/userprofile';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"component={home}/>
        <Route path="/userprofile/:id"component={userprofile}/>
      </Switch>
    </Router>
  );
}

export default App;
