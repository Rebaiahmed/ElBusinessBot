import React, { Component } from 'react';
import './index.css';
import firebase from 'firebase';
import { browserHistory,hashHistory } from 'react-router'
import axios from 'axios' ;
import {provider, auth , storageKey } from './client';
import openSocket from 'socket.io-client';
import NavBarComponent  from './Navbar';

class Home extends Component {







    constructor() {
       super();
       this.state = {
         posts :[],
         newQuestion :{}
       };
  //this.socket = openSocket('http://localhost:9000');

  //this.handleMsg = this.handleMsg.bind(this);


  }






//***********************************************//


   componentDidMount() {

//this.socket = openSocket('http://localhost:9000');

 //this.socket.on('send:data', this._recieveData);

}



//*******Define The Functions ************//

recieveData = (data)=>{
  //*****add it to our code ******//
}












  render() {

    return (
      <div className="container">

          <p> Home </p>
          </div>




    );
  }
}

export default Home;
