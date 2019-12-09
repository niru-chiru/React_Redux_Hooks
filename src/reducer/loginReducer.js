const initialState = {
    isLoggedIn: false,
    userData: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, isLoggedIn: action.payload};
            
        case 'LOGOUT_SUCCESS':
            return {...state, isLoggedIn: action.payload};

        default:
            return state;
    }
}
export default reducer;