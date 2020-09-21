import axios from 'axios';
import { FETCH_USER } from './types';

//whenever action creater calls return function, redux-thunk will auto call dispatch
export const fetchUser = () =>
	function(dispatch) {
		axios.get('/api/current_user').then((res) => dispatch({ type: FETCH_USER, payload: res }));
	};
