import { get } from './baseApi';

export const searchAction = (postData) => async dispatch => {debugger;
    let url = 'https://swapi.co/api/planets/';
    const res = await get(url, postData);

	dispatch({type: 'IS_LOADING'});
	if(res && res.data){
		dispatch({type: 'SEARCH_SUCCESS', payload: res.data.results});
		dispatch({type: 'STOP_LOADING'});
		//alert('search success');
	}
	else if(res && res.isAxiosError){
		alert('search failed');
		dispatch({type: 'STOP_LOADING'});
	}
};