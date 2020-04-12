import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ProfileContent.sass'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { reorder, getItemStyle, getListStyle } from './DragDrobSettings'
import ProfileDropableElement from './ProfileDropableElement'
import ProfileDropableContainer from './ProfileDropableContainer'

class ProfileContentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            container: [
                { id: "container-1"},
                { id: "container-2"},
                { id: "container-3"},
            ],
            droppable: [
                { id: "droppable-1", content: "my first element droppable" },
                { id: "droppable-2", content: "my second element droppable" },
                { id: "droppable-3", content: "my first element2 droppable" },
                { id: "droppable-4", content: "my second element2 droppable" },
            ],
            droppable2: [
                { id: "myItem-1", content: "my first element droppable2" },
                { id: "myItem-2", content: "my second element droppable2" },
                { id: "myItem-3", content: "my first element2 droppable2" },
                { id: "myItem-4", content: "my second element2 droppable2" },
            ],
            droppable3: [
                { id: "droppable3-1", content: "my first element droppable3" },
                { id: "droppable3-2", content: "my second element droppable3" },
                { id: "droppable3-3", content: "my first element2 droppable3" },
                { id: "droppable3-4", content: "my second element2 droppable3" },
            ]

        }
    }

    onDragEnd = (result) => {
        debugger
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        // if (result.source.droppableId !== result.destination.droppableId) {
        //     return;
        // }
        
        const items = reorder(
            result.source,
            result.destination,
            this,
        );
        this.setState(items);
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="profile-drag-drop">
                {/* <ProfileDropableContainer items={this.state.container} array={this.state.droppable}  id="container" /> */}
                    <ProfileDropableElement title="First name" items={this.state.droppable} id="droppable" />
                    <ProfileDropableElement title="Last name" items={this.state.droppable2} id="droppable2" />
                    <ProfileDropableElement title="Age" items={this.state.droppable3} id="droppable3" />
                </div>
            </DragDropContext>
        );
    }
}

const ProfileContent = connect(
    (state) => ({
        storeState: state.AppReduser,
    }),
)(ProfileContentClass);

export default ProfileContent;