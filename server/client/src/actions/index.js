import axios from 'axios';
import { FETCH_USER } from './types';

//whenever action creater calls return function, redux-thunk will auto call dispatch
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};
