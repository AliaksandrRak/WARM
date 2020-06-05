
const reorder = (source, destination, that) => {

        let state = {...that.state};
    if (source.droppableId === destination.droppableId) {   // inside array ?
        let result;
        result = Array.from(state.projects[state.activeProject][source.droppableId]);
        const [removed] = result.splice(source.index, 1);
        result.splice(destination.index, 0, removed);
        state.projects[state.activeProject][source.droppableId] = result
        return { state }
        // return { [source.droppableId]: result }
    }
    else {                                                  // outside array ?
        let sourceList, destinationList, result;
        sourceList = Array.from(state.projects[state.activeProject][source.droppableId]);
        destinationList = Array.from(state.projects[state.activeProject][destination.droppableId]);
        const [removed] = sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, removed);
        state.projects[state.activeProject][source.droppableId] = sourceList
        state.projects[state.activeProject][destination.droppableId] = destinationList
        return { state, uid: removed.uid, removed_status:destination.droppableId  }
        // return { [source.droppableId]: sourceList, [destination.droppableId]: destinationList }
    }

};

const grid = 8;

const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderRadius: '5px',
    // change background colour if dragging
    background: isDragging ? '#FFD700' : '#fff',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? '#008B8B' : '#008080',
    position: "relative",
    padding: "0px 8px",
    paddingTop: "70px",
    minWidth: 250,
    maxWidth: 400,
    height: '100%',

});

export {reorder, getItemStyle, getListStyle}