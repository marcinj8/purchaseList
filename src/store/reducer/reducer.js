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

const editLlists = (state, action, listType) => {
    const updatedList = Object.keys(state.list).filter(item => item !== action.name)
    const itemsUpdated = addItem(state, action, listType)
    const updatedState = {};
    for (let value of updatedList) {
        updatedState[value] = [state.list[value][0],state.list[value][1]]
    }
    return {
        ...state,
        list: {
            ...updatedState
        },
        [listType]: {
            ...itemsUpdated[listType]
        }
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state, action, 'list');
        case actionTypes.PURCHASED_ITEM: return editLlists(state, action, 'purchasedItems');
        case actionTypes.REMOVE_ITEM: return editLlists(state, action, 'deletedPosition');
        default: return state;
    };
};

export default reducer;