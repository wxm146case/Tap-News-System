import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import './App.css';

import NewsPanel from '../NewsPanel/NewsPanel';
import React from 'react';
import logo from './logo.png';

class App extends React.Component {
  render() {
    return(
      <div>
        <img className='logo' src={logo} alt='logo' />
        <div className='container'>
          <NewsPanel />
        </div>
      </div>
    );
  }
}

export default App;