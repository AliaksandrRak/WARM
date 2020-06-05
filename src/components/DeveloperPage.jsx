import React, { useState } from 'react';
import './DeveloperPage.sass';

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




class DeveloperPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [],
    };

  }

  

  componentDidMount() {
    this.props.dispatch(is_sending(true));
    debugger
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:8080/KP_webServlet__server_war_exploded/addPerson?company=${this.props.storeState.profile.company}&access=${this.props.storeState.profile.access}`, true);
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
        
        if (response.token) {
          responseArray.push(response);
        }
       
      });

      debugger
      this.setState({developers:responseArray});
      this.props.dispatch(is_sending(false));

    };
    request.onerror= (error) => {
      console.log("error", error);
      this.props.dispatch(is_sending(false));
    }
  }


  render() {

    return (
      <div className="developerPage">
        {this.state.developers.length !==0 ?
 <TableContainer component={Paper}>
 <Table className="developerPage-table" aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>{this.props.storeState.profile.company} Developers</TableCell>
       <TableCell align="right">First name</TableCell>
       <TableCell align="right">Last name</TableCell>
       <TableCell align="right">email</TableCell>
       <TableCell align="right">skills</TableCell>
       <TableCell align="right">specialization</TableCell>
       <TableCell align="right">qualification</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {this.state.developers.map((row, index) => (
       <TableRow key={row.token}>
         <TableCell component="th" scope="row">
           {index+1}
         </TableCell>
         <TableCell align="right">{row.firstName}</TableCell>
         <TableCell align="right">{row.lastName}</TableCell>
         <TableCell align="right">{row.email}</TableCell>
         <TableCell align="right">{row.skills}</TableCell>
         <TableCell align="right">{row.specialization}</TableCell>
         <TableCell align="right">{row.qualification}</TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
:
<div>
  <span>You don't have developers :(</span>
</div>
        }
       
      </div>
    );
  }
}

const DeveloperPage = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(DeveloperPageClass);

export default DeveloperPage;
