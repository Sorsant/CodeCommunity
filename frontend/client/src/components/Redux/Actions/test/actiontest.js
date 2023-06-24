import axios from 'axios';
import {
        REGISTER_PENDING,
        REGISTER_SUCCESS,
        REGISTER_FAILURE,
        LOGIN_FAILURE,
        LOGIN_PENDING,
        LOGIN_SUCCESS,
        LOGOUT_FAILURE,
        LOGOUT_PENDING,
        LOGOUT_SUCCESS,
        GET_USER_FAILURE,
        GET_USER_PENDING,
        GET_USER_SUCCESS,
        CHECK_AUTH_FAILURE,
        CHECK_AUTH_PENDING
        ,CHECK_AUTH_SUCCESS,
        RESET_REGISTERED
} from '../../action-types'
 axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/"
 
export const register = ({ first_name, last_name, email, password }) => async dispatch => {
	dispatch({ type: REGISTER_PENDING });
	try {
		const body = JSON.stringify({
			first_name,
			last_name,
			email,
			password,
		});

		const res = await axios.post('api/users/register', body, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const data = res.data;

		if (res.status === 201) {
			dispatch({ type: REGISTER_SUCCESS, payload: data });
		} else {
			dispatch({ type: REGISTER_FAILURE, payload: data });
		}
	} catch (err) {
		dispatch({ type: REGISTER_FAILURE, payload: err.response.data });
	}
};

export const login = ({ email, password }) => async dispatch => {
	dispatch({ type: LOGIN_PENDING });
	try {
		const body = JSON.stringify({
			email,
			password,
		});

		const res = await axios.post('api/users/login', body, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const data = res.data;

		if (res.status === 200) {
			dispatch({ type: LOGIN_SUCCESS, payload: data });
			dispatch(getUser());
		} else {
			dispatch({ type: LOGIN_FAILURE, payload: data });
		}
	} catch (err) {
		dispatch({ type: LOGIN_FAILURE, payload: err.response.data });
	}
};

export const getUser = () => async dispatch => {
	dispatch({ type: GET_USER_PENDING });
	try {
		const res = await axios.get('api/users/me', {
			headers: {
				Accept: 'application/json',
			},
		});

		const data = res.data;

		if (res.status === 200) {
			dispatch({ type: GET_USER_SUCCESS, payload: data });
		} else {
			dispatch({ type: GET_USER_FAILURE, payload: data });
		}
	} catch (err) {
		dispatch({ type: GET_USER_FAILURE, payload: err.response.data });
	}
};

export const checkAuth = () => async dispatch => {
	dispatch({ type: CHECK_AUTH_PENDING });
	try {
		const res = await axios.get('api/users/verify', {
			headers: {
				Accept: 'application/json',
			},
		});

		const data = res.data;

		if (res.status === 200) {
			dispatch({ type: CHECK_AUTH_SUCCESS, payload: data });
			dispatch(getUser());
		} else {
			dispatch({ type: CHECK_AUTH_FAILURE, payload: data });
		}
	} catch (err) {
		dispatch({ type: CHECK_AUTH_FAILURE, payload: err.response.data });
	}
};

export const logout = () => async dispatch => {
	dispatch({ type: LOGOUT_PENDING });
	try {
		const res = await axios.get('api/users/logout', {
			headers: {
				Accept: 'application/json',
			},
		});

		const data = res.data;

		if (res.status === 200) {
			dispatch({ type: LOGOUT_SUCCESS, payload: data });
		} else {
			dispatch({ type: LOGOUT_FAILURE, payload: data });
		}
	} catch (err) {
		dispatch({ type: LOGOUT_FAILURE, payload: err.response.data });
	}
};

export const resetRegistered = () => ({
	type: RESET_REGISTERED,
});