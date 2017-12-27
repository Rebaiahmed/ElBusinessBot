import React, { Component } from 'react';
import './login.css';

import firebase from 'firebase';
import { browserHistory,hashHistory } from 'react-router'
import axios from 'axios' ;
import {providerFcbk, auth , storageKey, } from './client';


class Login extends Component {







//***************SIGN IN WITH FACEBOOK**************//





  //***************SIGN IN WITH GOOGLE**************//

  SignInWithFacebook = () => {


        auth().signInWithPopup(providerFcbk)
         .then(function(data){

           console.log("php" + JSON.stringify(data.user.photoURL));
                 browserHistory.push('/ChatBot');
                  //this.setState({user: data.user.uid});

              /*  axios.post('http://127.0.0.1:9000/signin', {
                  uid : data.user.uid ,
                 displayName :data.user.displayName,
                 photoUrl :data.user.photoUrl,
                 email :data.user.email,
                 phoneNumber :data.user.phoneNumber,
               })
               .then(function (response) {
                 console.log("response" + response.data.result.user);
                 //localStorage.setItem('iUser', response.data.result.user);
                 //this.context.router.transitionTo('/');
                 browserHistory.push('/ChatBot');
               })
               .catch(function (error) {
                 console.log(error);
               });*/



         }).catch(function(err){
           console.log("err"  + err);
         })
    }

//***********************************************//

SignInWithGoogle = () => {

       auth().signInWithPopup(providerFcbk)
       .then(function(data){

                //this.setState({user: data.user.uid});
     browserHistory.push('/ChatBot');
              axios.post('http://127.0.0.1:9000/signin', {
                uid : data.user.uid ,
               displayName :data.user.displayName,
               photoUrl :data.user.photoUrl,
               email :data.user.email,
               phoneNumber :data.user.phoneNumber,
             })
             .then(function (response) {
               console.log("response" + response.data.result.user);
               //localStorage.setItem('iUser', response.data.result.user);
               //this.context.router.transitionTo('/');
               //browserHistory.push('/ChatBot');
             })
             .catch(function (error) {
               console.log(error);
             });



       }).catch(function(err){
         console.log("err"  + err);
       })
  }

















  render() {
    return (
<div className=" jumbotron">

<div className="row">

<div className="col-md-4"> </div>
<div className="col-md-4">
<div className="container">
  <div className="jumbotron">
    <h1>ElBusinessBot</h1>


    <div className="form-group">
        <button className="btn btn-primary" onClick={this.SignInWithFacebook}><i className="fa fa-google" aria-hidden="true"></i> Sign in With Facbeook</button><br/>
     </div>

    <div className="form-group">
  <button className="btn btn-primary" onClick={this.SignInWithGoogle}><i className="fa fa-google" aria-hidden="true"></i> Sign in With Google</button><br/>
   </div>
</div>
</div>


 </div>
<div className="col-md-4"> </div>

</div>












</div>
    );
  }
}

export default Login;
