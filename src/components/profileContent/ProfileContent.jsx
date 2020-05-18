import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ProfileContent.sass'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { reorder, getItemStyle, getListStyle } from './DragDrobSettings'
import ProfileDropableElement from './ProfileDropableElement'

class ProfileContentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            droppable: [
                {
                id: "droppable-1", content: "my first element droppable", 
                tags:["first", "second", "third", "fourth"] 
                },
                { id: "droppable-2", content: "my second element droppable", 
                tags:["first", "second"]  },
                { id: "droppable-3", content: "my first element2 droppable", 
                tags:["first", "second", "third", "fourth"]  },
                { id: "droppable-4", content: "my second element2 droppable", 
                tags:[]  },
            ],
            droppable2: [
                { id: "myItem-1", content: "my first element droppable2", 
                tags:["first", "second", "third"]  },
                { id: "myItem-2", content: "my second element droppable2", 
                tags:[] },
                { id: "myItem-3", content: "my first element2 droppable2", 
                tags:["first"]  },
                { id: "myItem-4", content: "my second element2 droppable2", 
                tags:[]},
            ],
            droppable3: [
                { id: "droppable3-1", content: "my first element droppable3", 
                tags:["first", "second", "third", "fourth"]  },
                { id: "droppable3-2", content: "my second element droppable3", 
                tags:[] },
                { id: "droppable3-3", content: "my first element2 droppable3", 
                tags:["first", "second", "third", "fourth"]  },
                { id: "droppable3-4", content: "my second element2 droppable3", 
                tags:[] },
            ]

        }
    }

    onDragEnd = (result) => {
        debugger
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        
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
                    <ProfileDropableElement title="To do" items={this.state.droppable} id="droppable" />
                    <ProfileDropableElement title="In progress" items={this.state.droppable2} id="droppable2" />
                    <ProfileDropableElement title="Done" items={this.state.droppable3} id="droppable3" />
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