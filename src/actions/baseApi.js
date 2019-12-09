import Axios from 'axios';

export const get = (url) => {
  return Axios.get(url).then(
    resp => {
      return resp;
    },
    err => {
      console.error("Error from GET call of ", url);
    }
  );
};
