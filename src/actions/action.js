export const CRYPTO_ACTIONS = {
  ADD_TABLE: "ADD_TABLE",
  DELETE_ITEM: "DELETE_ITEM",
  SORT_CAP: "SORT_CAP",
  SEARCH_ITEM: "SEARCH_ITEM",
  LOAD_FRESH_DATA: "LOAD_DATA",
};

export const addTable = (crypto = []) => ({
  type: CRYPTO_ACTIONS.ADD_TABLE,
  payload: crypto,
});

export const deleteItem = (id) => ({
  type: CRYPTO_ACTIONS.DELETE_ITEM,
  payload: id,
});

export const sortCap = (marketSupply) => ({
  type: CRYPTO_ACTIONS.SORT_CAP,
  payload: marketSupply,
});

export const searchItem = (item = []) => ({
  type: CRYPTO_ACTIONS.SEARCH_ITEM,
  payload: item,
});

export const loadData = (data = []) => ({
  type: CRYPTO_ACTIONS.LOAD_FRESH_DATA,
  payload: data,
});
