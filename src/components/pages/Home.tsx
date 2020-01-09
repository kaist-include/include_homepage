import React, { Component, MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo_simple.png';


const Home: React.FC = () => {

  return (
      <div className="Home">
        <div style={{margin:"auto"}}>
            <div style={{position: "absolute", top: "0", right: "0"}}>
                <button>Sign In</button>
                <button>Sign Up</button>
                <Link to="/signin"> SignIn </Link>
                <Link to="/signup"> SignUp </Link>
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

const linkStyle = {
  color: '#5c9c6d',
  textDecoration: 'none'
}

export default Home;