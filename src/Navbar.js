import React, { Component } from 'react';
import './index.css';
import firebase from 'firebase';
import { browserHistory,hashHistory,Link } from 'react-router'
import axios from 'axios' ;
import {provider, auth , storageKey } from './client';
import openSocket from 'socket.io-client';
import Modal from 'react-modal';




import { Navbar,NavItem,NavDropdown,Nav,MenuItem,FormGroup,FormControl,Button} from 'react-bootstrap';

class NavBarComponent extends Component {


    constructor() {
       super();
       this.state = {
         query :'',
         show :false
       };
//*********************//
this.handleChange = this.handleChange.bind(this);
this.saveAndClose = this.saveAndClose.bind(this);
this.OpenModal = this.OpenModal.bind(this);
  //this.socket = openSocket('http://localhost:9000');
  }


  handleChange(event) {
      this.setState({query: event.target.value});
    }



  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }


  }





//*****************************//
OpenModal =(e)=>{
   e.preventDefault();
  this.setState({show:!this.state.show})
}


//*********************//

addQuestion =(e)=>{
   e.preventDefault();
   console.log("clickeed");
let questionObj ={
content : this.state.query

}
//************send data to server**********//
this.socket.emit('sendQuestion', questionObj);

}

closeModal = () => this.setState({ show: false })

saveAndClose = () => {
console.log("ok");
      }


  render() {

    return (
<div>
      <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <Link to="/Home"><a>ElBusinessMan</a> </Link>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>

     <Nav>
      <NavItem eventKey={1} > <Link to="/Home"> Home </Link></NavItem>
       <NavItem eventKey={1} > <Link to="/ChatBot"> Coachings </Link></NavItem>
       <NavItem eventKey={2} > <Link to="/Profile"> Profile </Link> </NavItem>
     </Nav>

     <form className="navbar-form navbar-left" onSubmit={this.addQuestion}>
        <div className="form-group">
          <input type="text" className="form-control" value={this.state.query}
          onChange={this.handleChange}  placeholder="Search" />
        </div>
        <button  onClick={this.handleKeyPress} className="btn btn-success">Add Question</button>
      </form>
   </Navbar.Collapse>
 </Navbar>





</div>

    );
  }
}

export default NavBarComponent;
