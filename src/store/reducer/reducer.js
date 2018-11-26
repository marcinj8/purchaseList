const initialState = {
    list: {},
    deletedPosition: {},
    purchasedItems: {},
};

const addItem = (state, item) => {
    return {
        ...state,
        list: {
            ...state.list,
            [item.itemName]: item.value
        }
    };
};

const reducer = (state = {
    initialState
}, action) => {
    switch (action.type) {
        case 'add':
            return addItem(state, action.newItem);
        default:
            return state
    };
};

export default reducer;