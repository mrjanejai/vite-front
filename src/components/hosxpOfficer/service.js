import http from '../../http'

export default {
  get(id) {
    if (id) {
      console.log('get yes');
      return http.get(`/hosxpOfficers/${id}`)
    } else {
      console.log('get no');
      return http.get('/hosxpOfficers' + location.search)
    }
  },
  edit(id, data) {
    if (data) {
      console.log('get yes edit');
      return http.put(`/hosxpOfficers/${id}`, data)
    } else {
      console.log('get no edit');
      return http.get(`/hosxpOfficers/edit/${id}`)
    }
  }
}
