import http from '../../http'

export default {
  get(id) {
    if (id) {
      return http.get(`/mas/${id}`)
    }
    else {
      return http.get('/mas' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/mas', data)
    }
    else {
      return http.get('/mas/create')
    }
  },
  edit(id, data) {
    if (data) {
      return http.put(`/mas/${id}`, data)
    }
    else {
      return http.get(`/mas/${id}/edit`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/mas/${id}`)
    }
    else {
      return http.get(`/mas/${id}/delete`)
    }
  }
}