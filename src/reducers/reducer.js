import { CRYPTO_ACTIONS } from "../actions/action";

const defaultState = {
  data: [],
  fetchLoaded: false, // { name: string, url: string }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CRYPTO_ACTIONS.ADD_TABLE:
      if (!state.fetchLoaded) {
        return {
          ...state,
          data: [...state.data, ...action.payload],
          fetchLoaded: true,
        };
      }
      return;

    case CRYPTO_ACTIONS.SORT_CAP:
      return {
        ...state,
        data: [...action.payload],
      };
    case CRYPTO_ACTIONS.DELETE_ITEM:
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.payload.id)],
      };
    case CRYPTO_ACTIONS.SEARCH_ITEM:
      return {
        ...state,
        data: [...action.payload],
      };

    case CRYPTO_ACTIONS.LOAD_FRESH_DATA:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
