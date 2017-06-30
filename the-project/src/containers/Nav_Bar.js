import React, { Component } from 'react';
// import { connect } from 'react-redux';

import $ from 'jquery';

import './../styles/navBar.css';

export default class NavBar extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    $(document).ready(function(){
      $('.open-tab').on('click',function(){
        $('.navbar-main').animate({left: '-2vw'});
        $('.open-tab').animate({left: '-6vw'});
        $('.close-tab').animate({left: '17vw'});
      });

      $('.close-tab').on('click',function(){
        $('.navbar-main').animate({left: '-22vw'});
        $('.open-tab').animate({left: '-0.5vw'});
        $('.close-tab').animate({left: '-5vw'});
      });

    })
  }


  render(){


    return (
    <div>

      <div className="open-tab">
        <p><i className="fa fa-arrow-left" aria-hidden="true"></i></p>
      </div>

      <div className="close-tab">
        <p><i className="fa fa-arrow-right" aria-hidden="true"></i></p>
      </div>


      <div className='navbar-main'>
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="/home"><i className="fa fa-home house-symbol" aria-hidden="true"></i>  Dashboard</a></li>
          <li><a href="/calendar"><i className="fa fa-calendar" aria-hidden="true"></i>  Calendar</a></li>
          <li><a href="/taskboard"><i className="fa fa-tasks" aria-hidden="true"></i>  Taskboard</a></li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-line-chart" aria-hidden="true"></i>  Charts
              <span className="caret"></span></a>
            <ul className="dropdown-menu charts-dropdown">
              <li id='first-charts-category'><a href="#">Charts 1</a></li>
              <li><a href="#">Charts 2</a></li>
              <li><a href="#">Charts 3</a></li>
            </ul>
          </li>
        </ul>
      </div>


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
