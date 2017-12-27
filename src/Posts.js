import React, { Component } from 'react';
import axios from 'axios' ;
import NavBarComponent  from './Navbar';

import './index.css';

class Posts extends Component {




  constructor(props) {
    super(props);

    this.state = { posts :[] };
  }


  //*************************/:
    componentDidMount() {

 //**********GET THE BOOKS THROUGHT REST API GET METHOD************//
     axios.get(`http://localhost:9000/posts`)
          .then(res => {
             console.log("resres" + JSON.stringify(res));

           this.setState({posts:res.data});
           //console.log("mybooks" + this.state.books.length);
          },err=>{
            console.log("err" + err);
          });

   }







  render() {


    const { posts } = this.state ;
    //const items = [{name: "item1", id: 1}, {name: "item2", id: 2}, {name: "item3", id: 3}] ;


/*console.log("posts" + JSON.stringify(posts));
    const listItems = posts.map(function(listValue) =>{


    <div key={post._id}>
    <div className="card">


        <div className="card-body">
          <h5 className="card-title"><b>{post.title}</b></h5>
          </div>


          <p className="card-text"> {post.title}</p>
          <a href="#" className="card-link">Reply</a>
          <a className="card-link">{post.comments.length} comments</a>
        </div>

    </div>

  });*/


    return (


   <div className="container">




<NavBarComponent />


<div className="row">




<div className="col-lg-3">

               <div className="tests" class="col-lg-12 row">
                   <div className="col-lg-12">
                       <center><h5>Your Recent Progress</h5></center>
                       <hr />
                   </div>
                   <div className="col-lg-12 row">
                       <div className="col-lg-6"><img width="100%" src="./entrepre.jpg" alt="" /></div>
                       <div className="col-lg-6">
                           <p> General Entrepreneurial   </p>
                           <div className="progress">
                             <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                             aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" styles="width:50%">
                               50% Complete (info)
                             </div>
                           </div> <hr/>
                       </div>
                   </div>
                   <div className="col-lg-12 row">
                       <div className="col-lg-6"><img width="100%" src="./laws.jpg" alt="" /></div>
                       <div className="col-lg-6"><p> Startup Laws  </p><div className="progress">
                         <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                         aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" styles="width:80%">
                           80% Complete (info)
                         </div>
                       </div> <hr/> </div>

                   </div>
                   <div className="col-lg-12 row">
                       <div className="col-lg-6"><img  width="100%" src="./makretpen.jpg" alt="" /></div>
                       <div className="col-lg-6"><p><br/> Market Penetration  </p><div className="progress">
                         <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" styles="width:40%">
                           40% Complete (info)
                         </div>
</div> <hr/> </div>

                   </div>
               </div>
               <div className="tests" class="col-lg-12 row">
                   <div className="col-lg-12">
                       <center><h5>Take Our Aptitude Tests</h5></center>
                       <hr />
                   </div>
                   <div className="col-lg-12 row">
                       <div className="col-lg-6"><img width="100%" src="./entrepre.jpg" alt=""/></div>
                       <div className="col-lg-6"><p> General Entrepreneurial <hr/>  </p></div>
                   </div>
                   <div className="col-lg-12 row">
                       <div className="col-lg-6"><img width="100%" src="./laws.jpg" alt="" /></div>
                       <div className="col-lg-6"><p> Startup Laws<hr/>  </p></div>

                   </div>
                   <div className="col-lg-12 row">
                       <div className="col-lg-6"><img  width="100%" src="./makretpen.jpg" alt="" /></div>
                       <div className="col-lg-6"><p> Market Penetration<hr/>  </p></div>

                   </div>
               </div>
</div>













   <div class="col-lg-6" id="content">
   <br />






</div>







<div className="col-lg-3">
<br/><br/>

               <div className="row">
                  <div className="tests" className="col-lg-12 row">

                    <div className="col-lg-12">
                        <center><h5>They are entrepreneurs in your industry</h5></center>
                        <hr />
                    </div>


                    <div className="col-lg-12 row">
                        <div className="col-lg-4"><img width="100%" src="./elyes.jpg" alt="" /></div>
                        <div className="col-lg-8"><p> Ahmed Rebery   </p></div>
                    </div>


                    <div className="col-lg-12 row">
                        <div className="col-lg-4"><img width="100%" src="./elyes1.jpg" alt="" /></div>
                        <div className="col-lg-8"><p>Tops Mathmati </p></div>
                    </div>


                    <div className="col-lg-12 row">
                        <div className="col-lg-4"><img  width="100%" src="./elyes2.jpg" alt="" /></div>
                        <div className="col-lg-8"><p> Manai Elno   </p></div>
                    </div>


                  </div>
               </div>
               <div className="row">
                    <div className="tests" className="col-lg-12 row">

                    <div className="col-lg-12">
                        <center><h5>Interesting companies for you</h5></center>
                        <hr/>
                    </div>


                    <div className="col-lg-12 row">
                        <div className="col-lg-4"><img width="100%" src="./elyes.jpg" alt=""/></div>
                        <div className="col-lg-8"><p> EvalAI   </p></div>
                    </div>


                    <div className="col-lg-12 row">
                        <div className="col-lg-4"><img width="100%" src="./elyes1.jpg" alt="" /></div>
                        <div className="col-lg-8"><p> TOPS  </p></div>
                    </div>

                    <div className="col-lg-12 row">
                        <div className="col-lg-4"><img  width="100%" src="./elyes2.jpg" alt=""/></div>
                        <div className="col-lg-8"><p>J2I  </p></div>
                    </div>



               </div>
            </div>


</div>









</div>


  </div>








    );
  }
}

export default Posts ;
