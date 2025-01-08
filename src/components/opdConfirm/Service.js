import http from '../../http'

export default {
  get(id) {
    if (id) {
      console.log('get id');
      return http.get(`/opdConfirm/${id}`)
    }
    else {
      console.log('get location');
      return http.get('/opdConfirm' + location.search)
    }
  }
}