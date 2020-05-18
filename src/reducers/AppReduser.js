import {
    SET_OPEN,
    SET_LOGIN,
    SET_OPEN_CARD,

} from './Action';


const initialState = {
    isOpen: false,
    isLogIn: false,
    isOpenCard: false,
    companiesName: 'company',
    projectName: '',
};

export const AppReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN: {
            let newState = {
                ...state
            };
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
        case SET_OPEN_CARD: {
            let newState = {
                ...state
            };
            debugger
            newState.isOpenCard = !newState.isOpenCard;
            return newState;
        }

        default:
            return state;
    }
}