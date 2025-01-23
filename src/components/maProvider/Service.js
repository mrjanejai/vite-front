import http from '../../http'

export default {
  get(id) {
    if (id) {
      return http.get(`/maProviders/${id}`)
    }
    else {
      return http.get('/maProviders' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/maProviders', data)
    }
    else {
      return http.get('/maProviders/create')
    }
  },
  edit(id, data) {
    if (data) {
      return http.put(`/maProviders/${id}`, data)
    }
    else {
      return http.get(`/maProviders/${id}/edit`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/maProviders/${id}`)
    }
    else {
      return http.get(`/maProviders/${id}/delete`)
    }
  }
}