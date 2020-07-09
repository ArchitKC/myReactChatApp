import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'; 

import Home from './Containers/HomePage/HomePage';
import SignUp from './Containers/SignUp/SignUp';
import Login from './Containers/Login/Login'

function App() {
  let routes = (
              <Switch>
                <Route path="/Login"  component={Login}></Route>
                <Route path="/SignUp"  component={SignUp}></Route>
                <Route path="/" exact component={Home}></Route>
              </Switch>
          );
  return (
    <div >
      <BrowserRouter>
         {routes}
      </BrowserRouter>
     </div>    
  );
}

export default App;
