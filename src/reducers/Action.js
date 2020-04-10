const SET_OPEN = 'SET_OPEN';

const SET_LOGIN = 'SET_LOGIN';

const set_open = function() {
    return {
        type: SET_OPEN,
    }
}

const set_login = function() {
    return {
        type: SET_LOGIN,
    }
}

export {
    set_open,
    SET_OPEN,
    set_login,
    SET_LOGIN,
}