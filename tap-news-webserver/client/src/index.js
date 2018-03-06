import App from './App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';

ReactDOM.render(<SignUpPage />, document.getElementById('root'));
registerServiceWorker();