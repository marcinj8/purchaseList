import * as actionTypes from './actionTypes';

export const addItem = item => {
    return {
        type: actionTypes.ADD_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
    }
}

export const purchsedItem = item => {
    return {
        type: actionTypes.PURCHASED_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
    }
}

export const removeItem = item => {
    return {
        type: actionTypes.REMOVE_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
    }
}