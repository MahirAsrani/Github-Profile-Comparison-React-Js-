import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { PROFILE_LOADED, LOADING } from './actionTypes';

export const pLoaded = (username1, username2, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res1 = await Axios.get(`https://api.github.com/users/${username1}`);
    const res2 = await Axios.get(`https://api.github.com/users/${username2}`);

    dispatch({
      type: PROFILE_LOADED,
      payload: { user1: res1.data, user2: res2.data },
    });
  } catch (error) {
    history.push('/');
    swal(error.message);
  }
};
