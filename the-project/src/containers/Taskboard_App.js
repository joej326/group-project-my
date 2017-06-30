import React, { Component } from 'react';
import { connect } from 'react-redux';

import Taskboard from './TaskBoard';
import './../styles/taskboardStyle.css';

export default class TaskBoardApp extends Component {
  constructor(props){
    super(props);


  }


  render(){


    return (
      <div className='taskboard-app'>
        <h1 className='taskboard-heading'>TASKBOARD</h1>
        <Taskboard />
      </div>
    )
  }
}

// function mapStateToProps(state){
//   return {
//     toDoItem: toDoItem
//   }
// }
//
// export default connect(mapStateToProps,{})(ToDoContainer)
