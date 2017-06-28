import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import './../styles/taskboardStyle.css';



export default class ToDoItems extends Component {



  render(){

      //CAN I PASS IN THE BUTTON ID ?????
    return (


        <div className='sort' id={this.props.category}>
          <ul id={ `ul-${this.props.containerType.text}`} className='the-list'>

            {this.props.task}
          </ul>
        </div>


    )
  }
}
