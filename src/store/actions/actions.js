import * as actionTypes from './actionTypes';

export const addItem = item => {
    return {
        type: actionTypes.ADD_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        newList: 'list'
    }
}

export const purchsedItem = item => {
    return {
        type: actionTypes.PURCHASED_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        newList: 'purchasedItems',
        oldList: 'list'
    }
}

export const removeItem = item => {
    return {
        type: actionTypes.REMOVE_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        newList: 'deletedPosition',
        oldList: 'list'
    }
}

export const returnToPurchaselist = (item, currentList) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        newList: 'list',
        oldList: currentList
    }
}

export const deleteItem = (item, currentList) => {
    return {
        type: actionTypes.DELETE_ITEM,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        currentList: currentList,
    }
}