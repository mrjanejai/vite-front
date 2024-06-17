import http from '../../http';

export default {
  getPopulationData() {
    return http.get('/population-data');
  }
};
