import {
    SET_OPEN,
    SET_LOGIN,
    SET_OPEN_CARD,
    SET_PROLILE,
    IS_SENDING,

} from './Action';


const initialState = {
    isOpen: false,
    isLogIn: false,
    isOpenCard: false,
    companiesName: '',
    projectName: '',
    isSending: false,
    profile: {},
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
            
            newState.isLogIn = !newState.isLogIn;
            return newState;
        }

        case SET_OPEN_CARD: {
            let newState = {
                ...state
            };
            
            newState.isOpenCard = !newState.isOpenCard;
            return newState;
        }

        case SET_PROLILE: {
            let newState = {
                ...state
            };
            newState.profile = action.profile;
            newState.companiesName = action.profile.company;
            let profile = JSON.stringify(action.profile);
            localStorage.setItem("profile", profile);
            return newState;
        }

        case IS_SENDING: {
            let newState = {
                ...state
            };
            newState.isSending = action.isSending;
            return newState;
        }


        default:
            return state;
    }
}