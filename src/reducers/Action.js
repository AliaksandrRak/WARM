const SET_OPEN = 'SET_OPEN';

const SET_LOGIN = 'SET_LOGIN';

const SET_OPEN_CARD = 'SET_OPEN_CARD';

const SET_PROLILE = 'SET_PROLILE';

const IS_SENDING = 'IS_SENDING';


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

const set_open_card = function() {
    return {
        type: SET_OPEN_CARD,
    }
}

const set_profile = function(profile) {
    return {
        type: SET_PROLILE,
        profile: profile,
    }
}

const is_sending = function(isSending) {
    return {
        type: IS_SENDING,
        isSending,
    }
}

export {
    set_open,
    SET_OPEN,
    set_login,
    SET_LOGIN,
    set_open_card,
    SET_OPEN_CARD,
    set_profile,
    SET_PROLILE,
    is_sending,
    IS_SENDING,
}