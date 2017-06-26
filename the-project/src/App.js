import React, { Component } from 'react';
import './App.css';


import TaskBoard from './containers/TaskBoard';



class App extends Component {
  constructor(props){
    super(props);

  
  }



  render() {
    return (
      <div>
        <TaskBoard />
      </div>
    )
  }
}

export default App;


// onDataChange={shouldReceiveNewData()}
