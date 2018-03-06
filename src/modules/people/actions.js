import axios from 'axios';
import * as types from './constants';
import {TMDB_URL, TMDB_API_KEY} from '../../constants/api';

export function retrievePopularPeople() {
  return function (dispatch) {
    return axios.get(`${TMDB_URL}/person/popular?api_key=${TMDB_API_KEY}`)
    .then(result => {
      dispatch({
        type: types.GET_POPULAR_PEOPLE,
        popularPeople: result.data,
      });
    })
    .catch(error => {
      console.log(error);
    })
  }
}