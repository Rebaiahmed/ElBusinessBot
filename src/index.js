import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory,IndexRedirect,browserHistory } from 'react-router'


//************import the necessary pages*************


import Login from './login';
import Posts from './Posts';
import Community from './Community';
import ChatBot from './Chatbot';
import Home from './Home';
import Profile from './Profile';
import Coaching from './Coaching';




ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRedirect to="/Login" />

<Route path="/Login" component={Login}/>
<Route path="/ChatBot" component={ChatBot}/>
<Route path="/Home" component={Posts}/>
<Route path="/Profile" component={Profile}/>
<Route path="/Coaching" component={Coaching}/>

   </Route>
     </Router>



  , document.getElementById('root'));
registerServiceWorker();
