import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path ="/signup" component={SignUp}/>
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}


export default App;