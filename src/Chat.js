import React, { Component } from 'react';
import ChatInput from './ChatInput' ;
import ChatHistory from './ChatHistory';
import axios from 'axios' ;
import openSocket from 'socket.io-client';


class Chat extends Component {




  constructor() {
  super(props);
this.state = {
        response: false,
        endpoint: "http://127.0.0.1:9000",
        messages :[] ,
  };
 this.socket = openSocket('http://localhost:9000');
 }


//**************the function to send the Message************//
sendMessage = (message) => {
var {messages} = this.state;
messages.push(message);
this.setState({messages :messages});
  this.socket.emit('sendMessage', message);
}


//**********receive the message***************//
_messageRecieve = (msg)=> {
var {messages} = this.state;
messages.push(msg);
this.setState({messages :messages});
}






  render() {
 const { sendMessage, state } = this;

    return (
      <div className="App">
      Chat Interface

      <div>
      <ChatHistory messages={ state.messages } _messageRecieve={this._messageRecieve} sendMessage={ sendMessage } />
<ChatInput sendMessage={ sendMessage } />
</div>
      </div>
    );
  }
}

export default Chat;
