import {SELECT_ITEM, DESELECT_ITEM, SET_SEARCH_STRING} from './actionTypes';

export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        item,
    }
}

export const deselectItem = () => {
    return {
        type: DESELECT_ITEM,
    }
}

export const setSearchString = (searchString) => {
    return {
        type: SET_SEARCH_STRING,
        searchString,
    }
}