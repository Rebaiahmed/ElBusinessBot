import React, { Component } from 'react';
import {Button, Icon,Navbar,NavItem,Row,Input} from 'react-materialize'
import ReactDOM from 'react-dom';
import io from 'socket.io-client'

class ChatInput extends Component {



  constructor() {
     super();
     this.state ={

     }

   }




   componentDidMount() {


   }



//********onSubmit Message************//

onSubmit = (e) => {
  e.preventDefault();

  let message = this.refs.txtMessage.value;
  let messageObj={} ;
  console.log(message);
  if (message.length === 0) {
    return;
  }


//************Prepare the MSG object********//
   messageObj = {
  Who: 'Me',
  What: message,
  When: new Date().valueOf(),
};

//*****send the MSG
this.props.sendMessage(messageObj);

//**********************//
this.refs.txtMessage.value = '';
this.refs.txtMessage.focus();


};



componentDidMount() {
  this.refs.txtMessage.focus();
   this.scrollToBottom();
}




scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};



componentDidUpdate() {
     this.scrollToBottom();
}






  render() {

const { props, onSubmit } = this;

    return (
      <footer>
  <form  onSubmit={ onSubmit } ref={(el) => { this.messagesContainer = el; }}>
    <div className="row">


      <div className="input-field col s10">
        <i className="prefix mdi-communication-chat" />
        <input ref="txtMessage" type="text" placeholder="Ask your Question" />


        <span className="chip left">
          <img src="https://test.bmybit.com/static/img/bmybit_logo.png" />
          <span>AlBusneissMan</span>
        </span>

      </div>


      <div className="input-field col s2">
        <button type="submit" className="btn-floating btn-large waves-effect waves-light indigo darken-3">
          <i className="material-icons">send</i>
        </button>
      </div>



    </div>
  </form>
</footer>
    );
  }
}

export default ChatInput;
