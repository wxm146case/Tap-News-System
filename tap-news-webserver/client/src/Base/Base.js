import './Base.css';

import Auth from '../Auth/Auth';
import { Link } from 'react-router';
import React from 'react';

class Base extends React.Component {
  render() {
    return(
      <div>
        <nav className="nav-bar indigo lighten-1">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">   Tap News</a>
            <ul id="nav-modbile" className="right">
              {Auth.isUserAuthenticated() ?
                (<div>
                  <li>{Auth.getEmail()}</li>
                  <li><Link to="/logout">Log out</Link></li>
                 </div>)
                 :
                 (<div>
                   <li><Link to="/login">Log in</Link></li>
                   <li><Link to="/signup">Sign up</Link></li>
                  </div>)
              }
            </ul>
          </div>
        </nav>
        <br />
        {this.props.children}
      </div>
    );
  }
}

export default Base;