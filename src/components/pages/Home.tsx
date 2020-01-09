import React, { Component, MouseEvent} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from './../../logo_simple.png';


//const Home: React.FC = () => {
class Home extends Component {
  // handleClick(event: MouseEvent) {
  //   event.preventDefault();
  //   alert(event.currentTarget.tagName); // alerts BUTTON
  // }

  render() {
    return (
      <div className="Home">
        <div style={{margin:"auto"}}>
            <div style={{position: "absolute", top: "0", right: "0"}}>
                <Link to="/signin"> <button>Sign In</button> </Link>
                <Link to="/signup"> <button>Sign Up</button> </Link>
            </div>
        </div>
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>INCLUDE KAIST</h1>
            <Link style={linkStyle} to="/about">About</Link>
        </div>
      </div>
    );
  }
}

const linkStyle = {
  color: '#5c9c6d',
  textDecoration: 'none'
}

export default Home;