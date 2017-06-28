import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import './../styles/taskboardStyle.css';

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

//ALLOWS THE USER TO PRESS ENTER INSTEAD OF HAVING TO CLICK "ADD EVENT"
    $(document).delegate(`.ui-dialog`, 'keyup', function(e) {
    var tagName = e.target.tagName.toLowerCase();

    tagName = (tagName === 'input' && e.target.type === 'button') ? 'button' : tagName;

    if (e.which === $.ui.keyCode.ENTER && tagName !== 'textarea' && tagName !== 'select' && tagName !== 'button') {
        $(this).find('.ui-dialog-buttonset button').eq(0).trigger('click');

        return false;
    }
});


    // $('#In-Progress-button').on('click', function() {
    // $(`.delete-dialog`).dialog({
    //     width: 500,
    //     buttons: [
    //       //yes button
    //         {
    //             text: "Yes",
    //             // icon: "ui-icon-heart",
    //             click: function() {
    //                 $(this).dialog("close");
    //
    //             }
    //         },
    //         //no button
    //         {
    //           text: "No",
    //           click: function() {
    //             $(this).dialog("close");
    //           }
    //         }
    //     ],
    //     autoOpen: true
    // });

    // })


    //INPUT BOX FUNCTIONALITY

  //   $('.ui-dialog-buttonpane').find('button').css({background:'#286090',color:'white'});
  //   $('.ui-dialog-buttonpane').find('button:nth-child(2)').css({background:'#E25049',color:'white'})
  //   $(".ui-dialog").find(".ui-widget-header").text('Event Manager').css({background: "#286090", color: 'white'});
  //   // $(`.${containerType}-popUpDiv`).css('background', '#286090');
  //   $('.ui-dialog').addClass('align-input');
  //
  //
  // }

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

        {/* <div className={`delete-dialog`}><h1>Delete Event?</h1></div> */}
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
