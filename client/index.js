import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import normalize from './styles/normalize.css';
import styles from './styles/styles.scss';
import { Router, Route } from 'react-router-dom';
import Loginpage from "./components/Loginpage.jsx";
import Signup from "./components/Signup.jsx";

render(<App />, document.getElementById('app'));
    // <div>
    //     <Router>
    //         <div>
    //             <Route path="/" exact compoent={Loginpage} />
    //             <Route path="/homepage" compoent={App} />
    //             <Route path="/signup" compoent={Signup} />
    //         </div>
    //     </Router>
    // </div>, document.getElementById('app'));
