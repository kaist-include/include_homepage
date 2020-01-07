import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}


export default App;