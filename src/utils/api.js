import axios from "axios";

const baseURL = 'https://xebiascart.herokuapp.com/'

export default {

 auth: {
    login: data => {
       return axios.get(`${baseURL}users?username=${data.username}`);
      }
  },

  products: {
    fiterBy : data => {
      let URL;
      if( data !== ''){
        URL = `${baseURL}products?${data}`;
      } else {
        URL = `${baseURL}products`;
      } 

      return axios({
        method: "GET",
        url: URL,
      })
    },


  }

};
