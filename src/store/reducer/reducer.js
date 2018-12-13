import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: {
        bread: [1, 'pce'],
        sugar: [2, 'kg'],
        eggs: [8, 'pce']
    },
    deletedPosition: {},
    purchasedItems: {},
};

const addItem = (state, item, listType) => {
    return {
        ...state,
        [listType]: {
            ...state[listType],
            [item.name]: [item.quantity, item.unit]
        }
    };
};

const moveItem = (state, action) => {
    const updatedList = Object.keys(state[action.oldList]).filter(item => item !== action.name)
    const itemsUpdated = addItem(state, action, action.newList)
    const updatedState = {};
    for (let value of updatedList) {
        updatedState[value] = [state[action.oldList][value][0],state[action.oldList][value][1]]
    }
    return {
        ...state,
        [action.oldList]: {
            ...updatedState
        },
        [action.newList]: {
            ...itemsUpdated[action.newList]
        }
    }
}

const deleteItem = (state, action) => {
    console.log(state, action);
    
    return state
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state, action, action.newList);
        case actionTypes.PURCHASED_ITEM: return moveItem(state, action);
        case actionTypes.REMOVE_ITEM: return moveItem(state, action);
        case actionTypes.RETURN_TO_PURCHASED_LIST: return moveItem(state, action);
        case actionTypes.DELETE_ITEM: return deleteItem(state, action);
        default: return state;
    };
};

export default reducer;