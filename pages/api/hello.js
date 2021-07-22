// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
//
// }

import axios from 'axios';

export const url = 'about-us/'
const baseUrl = 'http://188.166.40.167';


class KalikovaApi {
  getData = (url, language = 'ru') => axios.get(`${baseUrl}/${url}`, {
    headers: {
      "Accept-Language": language,
    }
  });

  postData = (url, data) => {
    return axios.post(`${baseUrl}/${url}/`, data);
  }

}

export default KalikovaApi;