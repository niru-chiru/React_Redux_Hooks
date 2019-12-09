const initialState = {
    searchresult: null,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return {...state, searchresult: action.payload};

        case 'IS_LOADING':
            return {...state, isLoading: true};
        
        case 'STOP_LOADING':
            return {...state, isLoading: false};

        default:
            return state;
    }
}
export default reducer;