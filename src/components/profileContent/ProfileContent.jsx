import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ProfileContent.sass'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { reorder, getItemStyle, getListStyle } from './DragDrobSettings'
import ProfileDropableElement from './ProfileDropableElement'

import { is_sending } from '../../reducers/Action'

class ProfileContentClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeProject: null,
            projectNames: [],
            projects: {},

        }
    }

    componentDidMount() {
        
        this.props.dispatch(is_sending(true));
        const request = new XMLHttpRequest();
        request.open('GET', `http://localhost:8080/KP_webServlet__server_war_exploded/addTask?company=${this.props.storeState.profile.company}&access=${this.props.storeState.profile.access}`, true);
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

            let projectNames = responseArray[0].projectName.split('&& ');
            let projects = {};
            
            projectNames.map(element => {
                let arrayElements = [];
                responseArray.map(el => {
                    if (el.project === element) {
                        arrayElements.push(el)
                    }
                })
                let tasksToDo = arrayElements.filter((el) => el.task_status === 'to_do');
                let tasksInProgress = arrayElements.filter((el) => el.task_status === 'in_progress');
                let tasksDone = arrayElements.filter((el) => el.task_status === 'done');
                projects[element] = { tasksToDo, tasksInProgress, tasksDone };
            });


            this.setState({
                projectNames: projectNames,
                projects: projects,
                activeProject: projectNames[0],
            });
            this.props.dispatch(is_sending(false));

        };
        request.onerror = (error) => {
            console.log("error", error);
            this.props.dispatch(is_sending(false));
        }
    }

    onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }


        const items = reorder(
            result.source,
            result.destination,
            this,
        );
        this.sendChangeStatus(items.uid,items.removed_status);
        this.setState(items.state);

        
    }

    sendChangeStatus = (uid, status) => {
        debugger
        let newStatus = "";
        switch (status) {
            case "tasksToDo": 
                newStatus = 'to_do';
            break;

            case "tasksInProgress":
                newStatus = 'in_progress';
            break;

            case "tasksDone": 
                newStatus = 'done';
            break;
        }
        const request = new XMLHttpRequest();
        var body = `company=${this.props.storeState.profile.company}&access=${this.props.storeState.profile.access}&uid=${uid}&status=${newStatus}`;
        request.open('POST', `http://localhost:8080/KP_webServlet__server_war_exploded/changeStatus`, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(body);
        request.onload = (res) => { 
            let response = {}
            request.response.split(',').map((el) => {
                let array = el.split(':');
                response[array[0]] = array[1]
              });
              debugger
              if (response.value !== "all good") {
                console.log("response",response)
              }
        }
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {

        return (
            <div className="tasks">
                <div className="tasks-selectPproject">
                    {this.state.projectNames.map((el, index) =>
                        <span className={`tasks-selectPproject-item ${this.state.activeProject === el && 'active'}`} onClick={() => { this.setState({ activeProject: el }) }}>{el}</span>
                    )}

                </div>
                {this.state.activeProject &&
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <div className="profile-drag-drop">
                            <ProfileDropableElement title="To do" items={this.state.projects[this.state.activeProject].tasksToDo} id="tasksToDo" />
                            <ProfileDropableElement title="In progress" items={this.state.projects[this.state.activeProject].tasksInProgress} id="tasksInProgress" />
                            <ProfileDropableElement title="Done" items={this.state.projects[this.state.activeProject].tasksDone} id="tasksDone" />
                        </div>
                    </DragDropContext>
                }

            </div>
        );
    }
}

const ProfileContent = connect(
    (state) => ({
        storeState: state.AppReduser,
    }),
)(ProfileContentClass);

export default ProfileContent;