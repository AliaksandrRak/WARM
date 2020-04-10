import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ProfileContent.sass'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { reorder, getItemStyle, getListStyle } from './DragDrobSettings'

function ProfileDropableElementFunction(props) {

    return (
        <Droppable droppableId={props.id}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                >
                    <div className="profile-drag-drop-title">
                        <h3>{props.title}</h3>
                    </div>
                    {props.items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                        >
                            {(provided, snapshot) => (
                                <div>
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        style={getItemStyle(
                                            provided.draggableProps.style,
                                            snapshot.isDragging
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}


const ProfileDropableElement = connect(
    (state) => ({
        storeState: state.AppReduser,
    }),
)(ProfileDropableElementFunction);

export default ProfileDropableElement;