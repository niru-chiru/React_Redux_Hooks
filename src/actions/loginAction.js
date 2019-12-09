import { USER_DETAILS } from '../constants/appConstants';

export const loginAction = (userDetails) => dispatch => {

	if(userDetails.userName === USER_DETAILS.USERNAME && userDetails.password === USER_DETAILS.PWD){
		dispatch({type: 'LOGIN_SUCCESS', payload: true});
	}
	else {
		alert('invalid User Name / Password');
	}
};

export const logoutAction = () => dispatch => {
  dispatch({ type: "LOGOUT_SUCCESS", payload: false });
};