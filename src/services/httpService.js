import axios from 'axios';
import qs from 'qs';

class HttpService {
  constructor() {
    this.axios = axios.create({
      // Add any default configurations, such as base URL or headers
    });
  }

  get(url, queryParams, config) {
    const queryString = qs.stringify(queryParams);
    return this.axios.get(`${url}?${queryString}`, config!=null?config:{});
  }

  post(url, data, config) {
    return this.axios.post(url, data, config!=null?config:{});
  }

  put(url, data, config) {
    return this.axios.put(url, data, config!=null?config:{});
  }

  delete(url, config) {
    return this.axios.delete(url,config!=null?config:{});
  }
}

const httpService = new HttpService();

export default httpService;