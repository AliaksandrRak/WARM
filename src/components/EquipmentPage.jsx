import React, { useState } from 'react';
import './EquipmentPage.sass';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';
import { is_sending } from '../reducers/Action'




class EquipmentPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [],
    };

  }

  

  componentDidMount() {
    this.props.dispatch(is_sending(true));
    debugger
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:8080/KP_webServlet__server_war_exploded/addEquipment?company=${this.props.storeState.profile.company}&access=${this.props.storeState.profile.access}`, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
    request.onload = (res) => {
      let responseArray = [];
      request.response.split(';').map((el) => {
        let response = {}
        el.split(',').map((item) => {
          let array = item.split(':');
          
          if (array[0] && array[1]) {
            response[array[0]] = array[1]
          }
          
        });
        
        if (response.uid) {
          responseArray.push(response);
        }
       
      });

      debugger
      this.setState({equipments:responseArray});
      this.props.dispatch(is_sending(false));

    };

  }


  render() {
   
    return (
      <div className="equipmentPage">
        {this.state.equipments.length !==0 ?
 <TableContainer component={Paper}>
 <Table className="equipmentPage-table" aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>{this.props.storeState.profile.company} Equipment</TableCell>
       <TableCell align="right">Name</TableCell>
       <TableCell align="right">Description</TableCell>
       <TableCell align="right">Condition</TableCell>
       <TableCell align="right">Quantity</TableCell>
       <TableCell align="right">Cost</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {this.state.equipments.map((row, index) => (
       <TableRow key={row.uid}>
         <TableCell component="th" scope="row">
           {index+1}
         </TableCell>
         <TableCell align="right">{row.equipment_name}</TableCell>
         <TableCell align="right">{row.description}</TableCell>
         <TableCell align="right">{row.equipment_condition}</TableCell>
         <TableCell align="right">{row.quantity}</TableCell>
         <TableCell align="right">{row.cost}</TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
:
<div>
  <span>You don't have equipment :(</span>
</div>
        }
       
      </div>
    );
  }
}

const EquipmentPage = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(EquipmentPageClass);

export default EquipmentPage;
