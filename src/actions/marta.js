
import axios from 'axios';

export const FETCH_MARTA = 'FETCH_MARTA';

const MARTA_URL = 'http://localhost:7000/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';

export const fetchData = () => {
  return axios.get(MARTA_URL)
    .then(response => {
      debugger;
    });

  // return {
  //   type: 'MARTA',
  //   payload: request
  // }
}

