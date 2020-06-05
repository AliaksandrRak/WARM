import React, { useState } from 'react';
import './ProjectPage.sass';

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




class ProjectPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };

  }

  

  componentDidMount() {
    this.props.dispatch(is_sending(true));
    debugger
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:8080/KP_webServlet__server_war_exploded/addProject?company=${this.props.storeState.profile.company}&access=${this.props.storeState.profile.access}`, true);
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
        
        debugger
        if (response.developers === "null") {
          response.developers = 0;
        } else if (response.developers) {
          
          response.developers = response.developers.split('&& ');
        }
        
        if (response.tasks  === "null") {
          response.tasks = 0;
        } else if (response.tasks) {
          response.tasks = response.tasks.split('&& ').length;
        }
        
        if (response.uid) {
          responseArray.push(response);
        }
       
      });

      debugger
      this.setState({project:responseArray});
      this.props.dispatch(is_sending(false));

    };
    request.onerror= (error) => {
      console.log("error", error);
      this.props.dispatch(is_sending(false));
    }
  }


  render() {

    return (
      <div className="projectPage">
        {this.state.project.length !==0 ?
 <TableContainer component={Paper}>
 <Table className="projectPage-table" aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>{this.props.storeState.profile.company} Project</TableCell>
       <TableCell align="right">Poject name</TableCell>
       <TableCell align="right">Descriptions</TableCell>
       <TableCell align="right">Developers</TableCell>
       <TableCell align="right">Total amount developers</TableCell>
       <TableCell align="right">Needs developers</TableCell>
       <TableCell align="right">Tasks</TableCell>
       <TableCell align="right">Project status</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {this.state.project.map((row, index) => (
       <TableRow key={row.uid}>
         <TableCell component="th" scope="row">
           {index+1}
         </TableCell>
         <TableCell align="right">{row.projectName}</TableCell>
         <TableCell align="right">{row.descriptions}</TableCell>
         <TableCell align="right">{Array.isArray(row.developers) ? row.developers.map(el=> el+', ') : row.developers}</TableCell>
         <TableCell align="right">{row.totalAmountDevelopers}</TableCell>
         <TableCell align="right">{row.needsDevelopers}</TableCell>
         <TableCell align="right">{row.tasks}</TableCell>
         <TableCell align="right">{row.project_status}</TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
:
<div>
  <span>You don't have Project :(</span>
</div>
        }
       
      </div>
    );
  }
}

const ProjectPage = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(ProjectPageClass);

export default ProjectPage;
