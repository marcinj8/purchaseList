const initialState = {
    list: {
        bread: [1, 'pce'],
        sugar: [2, 'kg'],
        eggs: [8, 'pce']
    },
    deletedPosition: {},
    purchasedItems: {},
};

const addItem = (state, item) => {
    console.log( 'state')
    console.log(initialState, 'state')
    return {
        ...state,
        list: {
            ...state.list,
            [item.name]: [item.value, item.unit]
        }
    };
};

const reducer = (state = initialState, action) => {
    console.log(action.type, 'state')

    switch (action.type) {
        case 'ADD_ITEM':
            return addItem(state, action);
        default:
            return state
    };
};

export default reducer;