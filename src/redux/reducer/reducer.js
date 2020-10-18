import {SELECT_ITEM, DESELECT_ITEM} from '../actionTypes';

const initialState = {
    chosenItem: "",
}

export default function (state=initialState, action) {

    switch(action.type) {

        case SELECT_ITEM:
            return {
                ...state,
                chosenItem: action.item,
            }

        case DESELECT_ITEM:
            return initialState;

        default:
            return state;
    }
}