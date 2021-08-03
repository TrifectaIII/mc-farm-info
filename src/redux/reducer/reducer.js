import {SELECT_ITEM, DESELECT_ITEM, SET_SEARCH_STRING} from '../actionTypes';

const initialState = {
    chosenItem: "",
    searchString: "",
}

export default function (state=initialState, action) {

    switch(action.type) {

        case SELECT_ITEM:
            return {
                ...state,
                chosenItem: action.item,
            }

        case DESELECT_ITEM:
            return {
                ...state,
                chosenItem: "",
            };

        case SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.searchString,
            }

        default:
            return state;
    }
}