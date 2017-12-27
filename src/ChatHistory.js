import React, { Component } from 'react';
import logo from './logo.svg';

import {Button, Icon,Navbar,NavItem,Row,Input} from 'react-materialize'
import ReactDOM from 'react-dom';
import io from 'socket.io-client'

class ChatHistory extends Component {





  constructor(props) {
        super(props);
    }




   componentDidMount() {}




   scroll() {
       var el = document.getElementById('messages');
       window.scrollTo(0, el.scrollHeight);
     }










//****************************//
SelectPair = (id) =>{


const messageObj = {
Who: 'Me',
What: 'currency',
When: new Date().valueOf(),
};
this.scrollToBottom();
this.props.sendMessage(messageObj);

//this.props.sendMessage("My Pair is " + pair);

}

//*************************//



scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

componentDidMount() {
     this.scrollToBottom();
}

componentDidUpdate() {
     this.scrollToBottom();
}




  render() {

const { props , SelectPair } = this;
return (
  return (
     <div id="messages" className="messages">
      <p> List of messages here </p>
     </div>
   )
  }
}

export default ChatHistory;
