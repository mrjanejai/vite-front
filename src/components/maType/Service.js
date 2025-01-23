import http from '../../http'

export default {
  get(id) {
    if (id) {
      return http.get(`/maTypes/${id}`)
    }
    else {
      return http.get('/maTypes' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/maTypes', data)
    }
    else {
      return http.get('/maTypes/create')
    }
  },
  edit(id, data) {
    if (data) {
      return http.put(`/maTypes/${id}`, data)
    }
    else {
      return http.get(`/maTypes/${id}/edit`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/maTypes/${id}`)
    }
    else {
      return http.get(`/maTypes/${id}/delete`)
    }
  }
}