import {SELECT_ITEM, DESELECT_ITEM} from './actionTypes';

export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        item
    }
}

export const deselectItem = () => {
    return {
        type: DESELECT_ITEM,
    }
}