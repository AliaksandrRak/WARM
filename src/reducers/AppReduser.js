import {
    SET_OPEN,
    SET_LOGIN,

} from './Action';


const initialState = {
    isOpen: false,
    isLogIn: false,
};

export const AppReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN: {
            let newState = {
                ...state
            };
            debugger
            newState.isOpen = !newState.isOpen;
            return newState;
        }
        case SET_LOGIN: {
            let newState = {
                ...state
            };
            debugger
            newState.isLogIn = !newState.isLogIn;
            return newState;
        }

        default:
            return state;
    }
}