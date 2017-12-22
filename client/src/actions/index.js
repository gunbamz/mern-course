import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async (dispatch) => {
  // action creater returns a functon, not an action
    const res = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };
