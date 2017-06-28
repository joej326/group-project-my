import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import './../styles/taskboardStyle.css';


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


      //MAKES THE EVENTS SORTABLE
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



// WINDOW POPUP DIALOG BOX

        var inputVal = $('.input-target').val();

        $(`.${containerType}-popUpDiv`).dialog({
            width: 500,
            buttons: [
              //ADD EVENT BUTTON
                {
                    text: "Add Event!",
                    // icon: "ui-icon-heart",
                    click: function() {
                        $(this).dialog("close");

                          $('.one-item').first().clone().appendTo(`#ul-${listType}`).children().find('p').text( $(`.${listType}-input-box`).val() );
                          $(`.${listType}-input-box`).val('');
                    }
                },
                //CANCEL BUTTON
                {
                  text: "cancel",
                  click: function() {
                    $(this).dialog("close");
                  }
                }
            ],
            autoOpen: false
        });


      //POPUP BOX STYLING
        $('.ui-dialog-buttonpane').find('button').css({background:'#286090',color:'white'});
        $('.ui-dialog-buttonpane').find('button:nth-child(2)').css({background:'#E25049',color:'white'})
        $(".ui-dialog").find(".ui-widget-header").text('Add Event').css({background: "#286090", color: 'white'});
        $(`.${containerType}-popUpDiv`).css('background', '#286090');
        $('.ui-dialog').addClass('align-input');

//enables the user to press enter to submit new event instead of having to click on the 'add event' button



    });

}

  render(){




  let tasks =  [{task: 'task1', id: 1},{task: 'task2',id: 2},{task:'task3',id:3},{task:'task4',id:4}];




    return (
      <div className='todo-container'>
        <h4 className={`${this.props.containerType.color} container-heading`}>{this.props.containerType.text}</h4>
        <ToDoItems containerType={this.props.containerType} category={this.props.category} task={tasks.map( (val,i)=>{return (
          // THIS .MAP FUNCTION RETURNS AN 'li' THAT CONTAINS A DIV
          //TO BE ADDED TO THE 'TO_DO_ITEMS' COMPONENT'S 'ul'
          <li key={i} className='one-item inbound'>
          <div  className='todo-items checkbox-and-event'>
            <p>{val.task}</p>
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
