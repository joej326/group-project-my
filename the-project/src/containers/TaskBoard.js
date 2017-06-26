import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import ToDoContainer from './To_Do_Container';

export default class TaskBoard extends Component {
  constructor(props){
    super(props);


  }
  componentDidMount(){
    var popUpDiv = $('.popUpDiv');
    var inputVal = $('.input-target').val();
    $('#Upcoming-button').on('click', function() {
        $('.Upcoming-popUpDiv').dialog({autoOpen: true})
        
    })
    $('#In-Progress-button').on('click', function() {
        $('.In-Progress-popUpDiv').dialog({autoOpen: true})

    })
    $('#Complete-button').on('click', function() {
        $('.Complete-popUpDiv').dialog({autoOpen: true})

    })
    //INPUT BOX FUNCTIONALITY




  }

  render(){



  let upcoming = {
    text: 'Upcoming',
    color: 'blue'
  }

  let inProgress = {
    text: 'In-Progress',
    color: 'yellow'
  }

  let complete = {
    text: 'Complete',
    color: 'green'
  }

  let inbound = 'inbound';
  let outbound = 'outbound';
  let pending = 'pending';



    return (
      <div className='todo-containers-div'>
        <ToDoContainer category={inbound} containerType={upcoming} />
        <ToDoContainer category={pending} containerType={inProgress} />
        <ToDoContainer category={outbound} containerType={complete} />
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
