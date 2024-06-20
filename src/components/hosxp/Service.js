import http from '../../http';

export default {
  getPopulationData() {
    return http.get('/hosxp/population-data');
  }
};
