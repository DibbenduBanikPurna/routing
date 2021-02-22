import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import CountryDetails from './Components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">

          <Home/>

          </Route>
          <Route  path="/country/:countryName">
            <CountryDetails/>
          </Route>

        
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
