import React, { Component } from 'react';
import "./home.css";



class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  render() {
    
    
    
    return (
      <div className="container-fluid2">
       
      </div>
    );
  }
}

export default Home;

           
          
