import React, { Component } from 'react';
import axios from 'axios' ;
import NavBarComponent  from './Navbar';


class Profile extends Component {




  constructor(props) {
    super(props);

    this.state = { posts :[] };
  }


  //*************************/:
    componentDidMount() {

 //**********GET THE BOOKS THROUGHT REST API GET METHOD************//
     axios.get(`http://localhost:9000/posts`)
          .then(res => {
             console.log("resres" + JSON.stringify(res.data.result));

           this.setState({blogs:res.data.result});
           //console.log("mybooks" + this.state.books.length);
          },err=>{
            console.log("err" + err);
          });

   }







  render() {



    return (




<div className="container">
<NavBarComponent />


<p> Profile </p>
  </div>








    );
  }
}

export default Profile ;
