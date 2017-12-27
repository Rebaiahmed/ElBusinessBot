import React, { Component } from 'react';

import firebase from 'firebase';
import { browserHistory,hashHistory } from 'react-router'
import axios from 'axios' ;
import {provider, auth , storageKey } from './client';
import './index.css';
import openSocket from 'socket.io-client';
import NavBarComponent  from './Navbar';


class ChatBot extends Component {







    constructor() {
       super();
       this.state = {
         response: false,
         endpoint: "http://127.0.0.1:9000",
         messages :[] ,
         message :''
       };
  //this.socket = openSocket('http://localhost:9000');

  //this.handleMsg = this.handleMsg.bind(this);

  this.socket = openSocket('http://localhost:9000');

   this.socket.on('send:message',function(data){
     console.log(data);
  });
  }






//***********************************************//


   componentDidMount() {

     this.socket = openSocket('http://localhost:9000');


     this.socket.on('send:message', this._messageRecieve);

}


/****************send a Message***************/
sendMessage = () => {

  console.log('sendMessage');
 let message = this.refs.txtMessage.value;
//**********GET THE MSG DATA***********//





console.log("messgae" + message);

let messageObj={} ;
 console.log(message);
 if (message.length === 0) {
   return;
}


messageObj = {
Who: 0,
What: message,
When: new Date().valueOf(),

};


//*******update the state********//
let {messages} = this.state;

messages.push(messageObj);
this.setState({messages :messages});

//*****send it ot server
this.socket.emit('sendMessage', messageObj);




  this.refs.txtMessage.value = '';
  this.refs.txtMessage.focus();
}

//*******************************//
_messageRecieve = (msg)=> {

console.log("we reeceibe  message " + JSON.stringify(msg) + "type" + msg);
 var {messages} = this.state;
       messages.push(msg);
       this.setState({messages :messages});

}


//***************************SCROLL**********//
componentDidUpdate() {
    // get the messagelist container and set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }












  render() {
const { sendMessage, state } = this;
const { messages} = this.state ;






    return (
      <div className="container">

<NavBarComponent />
        <div className="row">
          <div className="col-lg-6">
            <br/><br/>

            <div className="row">
              <div className="col-lg-12">
               <iframe width="100%" height="400" src="https://www.youtube.com/embed/n-beA3gmRsM" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe><hr/>
              </div>
            </div>


            <div className="row">
              <div className="col-lg-12"><h3>Additional Resources</h3><br/>

              <p>These links can further help you :</p>
                    - <a href="">Business Cheatsheet</a><br/>
             <a href="">Best tips for best entrepreneurs</a>


                </div>
            </div>




             </div>




      <div className="col-lg-6">



      <div className="chat_window">
                    <div className="top_menu">
                      <div className="buttons">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button maximize"></div>
                        </div>

                        <div className="title">Chat</div>
                      </div>


                      <ul className="messages" id='messageList'>
                      {messages.map(function(msg, index){
                        if(msg.Who==0){
                          return <li className="user" key={index}>{msg.What}</li>;

                        }else{
                          return <li className="bot" key={index}>{msg.What}</li>;

                        }
                        })}


                      </ul>




                      <div className="bottom_wrapper clearfix">

                        <div className="message_input_wrapper">
                          <input   ref="txtMessage"  type="text"
                           className="message_input" placeholder="Type your message here..."
                         />
                        </div>




                          <button  onClick={this.sendMessage} className="btn btn-success">Success</button>





                      </div>
                    </div>
                    <div className="message_template">
                      <li className="message">
                      <div className="avatar"></div>
                      <div className="text_wrapper">
                      <div className="text"></div>
                      </div>
                      </li>
      </div>



      </div>




          </div>










          </div>




    );
  }
}

export default ChatBot;
