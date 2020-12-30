import {FETCH_CRYPTO_LOADING, FETCH_CRYPTO_SUCCESS, FETCH_CRYPTO_FAIL, REMOVE_CRYPTO_TOKEN, ADD_CRYPTO_TOKEN, ADD_CRYPTO_FAIL} from '../actions/types';

const initialState = {
  activeCount: 0,
  error: null,
  loading: null,
  tokenList: [],
};

export const cryptoReducer = (state = initialState, action) => {
  const {type, payload} = action;
  let tokenList = [];
  switch (type) {
    case FETCH_CRYPTO_LOADING:
      return {...state, loading: true};

    case FETCH_CRYPTO_SUCCESS:
      tokenList = payload.map((token) => {
        return {symbol: token.symbol, id: token.id, selected: false};
      });
      return {...state, error: null, activeCount: 0, loading: false, tokenList};

    case FETCH_CRYPTO_FAIL:
      return {tokenList: [], error: 'Crypto data could not be fetched', activeCount: 0, loading: false};

    case ADD_CRYPTO_TOKEN:
      let addIndex = state.tokenList.findIndex((token) => token.symbol === payload.symbol);
      tokenList = [...state.tokenList];
      tokenList[addIndex] = {...payload, selected: true};
      return {...state, loading: false, tokenList, activeCount: state.activeCount + 1};

    case ADD_CRYPTO_FAIL:
      return {...state, error: 'Crypto token data could not be added', loading: false};

    case REMOVE_CRYPTO_TOKEN:
      let removeIndex = state.tokenList.findIndex((token) => token.symbol === payload);
      tokenList = [...state.tokenList];
      tokenList[removeIndex].selected = false;
      return {...state, loading: false, tokenList, activeCount: state.activeCount - 1};

    default:
      return state;
  }
};
