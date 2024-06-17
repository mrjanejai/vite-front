import http from '../../http'

export default {
  getPopulationData() {
    return http.get('/hosxp/populationData')
  }
}
