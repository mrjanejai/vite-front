import http from '../../http'

export default {
  get(id) {
    if (id) {
      console.log('get id');
      return http.get(`/userAccounts/${id}`)
    }
    else {
      console.log('get location');
      return http.get('/userAccounts' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/userAccounts', data)
    }
    else {
      return http.get('/userAccounts/create')
    }
  },
  edit(id, data) {
    if (data) {
      console.log('put id data');
      return http.put(`/userAccounts/${id}`, data)
    }
    else {
      console.log('get id edit');
      return http.get(`/userAccounts/${id}/edit`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/userAccounts/${id}`)
    }
    else {
      return http.get(`/userAccounts/${id}/delete`)
    }
  }
}