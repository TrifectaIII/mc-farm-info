import {PLACEHOLDER_ACTION} from '../actionTypes';

const initialState = {
    
}

export default function (state=initialState, action) {

    switch(action.type) {

        case PLACEHOLDER_ACTION:
            return state;

        default:
            return state;
    }
}