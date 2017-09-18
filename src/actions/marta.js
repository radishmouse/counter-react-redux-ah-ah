
import axios from 'axios';

export const FETCH_MARTA = 'FETCH_MARTA';
export const FETCH_MARTA_SUCCESS = 'FETCH_MARTA_SUCCESS';

const MARTA_URL = 'http://localhost:7000/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';

const fetchData = () => {
  const request = axios.get(MARTA_URL)

  return {
    type: FETCH_MARTA,
    payload: request
  }
}

const fetchDataSuccess = (items) => ({
  type: FETCH_MARTA_SUCCESS,
  items,
});

// const fetchData = () => {
//   return (dispatch) => {
//     const request = axios.get(MARTA_URL)
//       .then(response => {
//         dispatch(fetchDataSuccess(response.data))
//       })
//       .catch(error => {
//         console.log(error);
//         throw(error);
//       })
//   }
// };

// const fetchDat

export default fetchData;
