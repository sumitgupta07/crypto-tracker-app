import api from '../api';

import {FETCH_CRYPTO_SUCCESS, FETCH_CRYPTO_FAIL, REMOVE_CRYPTO_TOKEN, ADD_CRYPTO_TOKEN, FETCH_CRYPTO_LOADING, ADD_CRYPTO_FAIL} from './types';

export const fetchCryptoLoading = () => {
  return {type: FETCH_CRYPTO_LOADING};
};
export const fetchCryptoData = () => async (dispatch) => {
  dispatch(fetchCryptoLoading());
  try {
    const {data} = await api.get('/map');
    dispatch({
      type: FETCH_CRYPTO_SUCCESS,
      payload: data.data,
    });

    //Setup first 5 tokens for initial table display
    for (let i = 0; i < 5; i++) {
      dispatch(addCryptoToken(data.data[i].symbol));
    }
  } catch (error) {
    dispatch({
      type: FETCH_CRYPTO_FAIL,
    });
  }
};

export const removeCryptoToken = (token) => {
  return {
    type: REMOVE_CRYPTO_TOKEN,
    payload: token,
  };
};

export const addCryptoToken = (symbol) => async (dispatch) => {
  try {
    const {data} = await api.get(`/quotes?symbol=${symbol}`);
    const {id, cmc_rank, name, quote} = data.data[symbol];
    let price = null;
    if (quote && quote.USD && quote.USD.price) {
      price = quote.USD.price;
    }
    dispatch({
      type: ADD_CRYPTO_TOKEN,
      payload: {id, cmc_rank, name, symbol, price},
    });
  } catch (error) {
    dispatch({
      type: ADD_CRYPTO_FAIL,
    });
  }
};
