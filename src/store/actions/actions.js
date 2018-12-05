import * as actionTypes from './actionTypes';

export const addItem = item => {
    return {
        type: actionTypes.ADD_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
    }
}