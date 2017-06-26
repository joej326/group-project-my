import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


import ToDoItems from './../components/To_Do_Items';

export default class ToDoContainer extends Component {
  constructor(props){
    super(props);


  }
componentDidMount() {

  let listType = this.props.containerType.text;
  var containerType = this.props.containerType.text;
  console.log(listType);
    $(document).ready(function() {

        $('div.sort li').disableSelection();

        $('#pending ul').sortable({revert: 'true', connectWith: "#inbound ul, #outbound ul", items: "li.inbound"});

        $('#outbound ul').sortable({revert: 'true', connectWith: "#inbound ul, #pending ul", items: "li.inbound"});

        $('#inbound ul').sortable({revert: 'true', connectWith: "#pending ul, #outbound ul", items: "li.inbound"});

        $('.red').on('click', function() {
            $(this).parent().parent().remove();
        })
        $(document).on('click', '.red', function(){
            $(this).parent().parent().remove();
        })



// WINDOW POPUP

        var inputVal = $('.input-target').val();

        $(`.${containerType}-popUpDiv`).dialog({
            buttons: [
                {
                    text: "Add Event!",
                    // icon: "ui-icon-heart",
                    click: function() {
                        $(this).dialog("close");
                        console.log(listType);
                        $('.one-item').first().clone().appendTo(`#ul-${listType}`);



                    }
                }
            ],
            autoOpen: false
        });



        $('.ui-dialog-buttonpane').find('button').css({background:'#286090',color:'white'});
        $(".ui-dialog").find(".ui-widget-header").text('Add a New Event').css({background: "#286090", color: 'white'});
        $(`.${containerType}-popUpDiv`).css('background', '#286090')
    });

    // $('.Upcoming-input-box').
}

  render(){




  let tasks =  [{task: 'task1', id: 1},{task: 'task2',id: 2},{task:'task3',id:3},{task:'task4',id:4}];




    return (
      <div className='todo-container'>
        <h4 className={this.props.containerType.color}>{this.props.containerType.text}</h4>
        <ToDoItems containerType={this.props.containerType} category={this.props.category} task={tasks.map( (val,i)=>{return (
          <li key={i} className='one-item inbound'>
          <div  className='todo-items checkbox-and-event'>
            <input type="checkbox"/>
            {val.task}
            <h4><i className="red fa fa-minus-circle" aria-hidden="true"></i></h4>
          </div>
          </li>
        )
        })
        } />
        <button id={`${this.props.containerType.text}-button`} className='add-button btn btn-primary'>+Add New</button>
        <div className={`${this.props.containerType.text}-popUpDiv`}><input className={`${this.props.containerType.text}-input-box`} placeholder='enter event here' type="text" /></div>
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
