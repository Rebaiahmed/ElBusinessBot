import React, { Component } from 'react';
import axios from 'axios' ;
import NavBarComponent  from './Navbar';


class Coachings  extends Component {




  constructor(props) {
    super(props);

    this.state = { posts :[] };
  }









  render() {



    return (




<div className="container">
<NavBarComponent />


<p> coahcings </p>
  </div>








    );
  }
}

export default Coachings ;
