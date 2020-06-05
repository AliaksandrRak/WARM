import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ProfileContent.sass'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { reorder, getItemStyle, getListStyle } from './DragDrobSettings';
import { set_open_card } from '../../reducers/Action'

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
                            key={item.uid}
                            draggableId={item.uid}
                            index={index}
                        >
                            {(provided, snapshot) => (
                                <div className="card" onClick={() => props.dispatch(set_open_card())}>
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        style={getItemStyle(
                                            provided.draggableProps.style,
                                            snapshot.isDragging
                                        )}
                                    >
                                        <div className="card-title">
                                            <span>{item.taskName}</span>
                                        </div>

                                        <div className="card-tags">
                                            <div className="card-tag" style={{background: item.urgency === "high" ? "#FF0000":item.urgency === "medium"? "#FFD700" : "#a3a1a1" }}>
                                                <span>{item.urgency}</span>
                                            </div>
                                            {/* {item.tags.map((tag, number) =>
                                            number < 3 &&
                                                <div className="card-tag">
                                                    <span>{tag}</span>
                                                </div>
                                            )} */}
                                        </div>
                                        <div className="card-description">
                                            <span>Description:</span>
                                            <p>{item.descriptions}</p>
                                        </div>
                                        <div className="card-developers">
                                            {item.developers}
                                        </div>
                                        <div className="card-deadline">
                                            <span>Deadline: </span>
                                            <span>{item.deadline}</span>
                                        </div>
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