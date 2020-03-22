import React, { Component } from 'react';
import Home from './components/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <Router>
        <div className="App" >                    
            <Switch>
              <Route exact path="/" component={Home} />              
              <Route exact path="/pok" component={Home} />              
            </Switch>          
        </div>
      </Router>      
    )
  }
}

export default App;
