import React from 'react';
import Navv from './nav'
import Landing from './landing'
import Taxi from './taxi'
// import './mobile.css'
import {BrowserRouter as Router , Switch , Route } from  'react-router-dom'
import Checkout from './checkout';
import Contacts from './contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navv/>
        <Switch>
          <Route path='/' exact component={Landing}/>
          <Route path='/selectVehicle' component={Taxi}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
