import { addTable } from "../actions/action";

const URL = `https://api.coincap.io/v2/assets`;

// export function firstMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       console.log("Witamy w pierwszym middleware");
//       console.log(action);
//       return next(action);
//     };
//   };
// }

export const secondMiddleware = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    return next(action);
  }
  console.log("zamiast akcji Otrzymujemy FUNKCJE");
  action(next);
};

export function fetchData() {
  return async function (dispatch) {
    console.log("fetchujemy dane");
    const response = await fetch(URL);
    const { data } = await response.json();
    console.log(data);
    dispatch(addTable(data));
  };
}

// export const fetchCrypto = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   console.log("Fetch laduje sie pierwszy");
//   return data;
// };

// export const getAllCrypto = () => async (dispatch) => {
//   const { data } = await fetchCrypto();
//   dispatch(addTable(data));
// };
