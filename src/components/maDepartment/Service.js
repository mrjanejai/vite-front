import http from '../../http'

export default {
  get(id) {
    if (id) {
      return http.get(`/maDepartments/${id}`)
    }
    else {
      return http.get('/maDepartments' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/maDepartments', data)
    }
    else {
      return http.get('/maDepartments/create')
    }
  },
  edit(id, data) {
    if (data) {
      return http.put(`/maDepartments/${id}`, data)
    }
    else {
      return http.get(`/maDepartments/${id}/edit`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/maDepartments/${id}`)
    }
    else {
      return http.get(`/maDepartments/${id}/delete`)
    }
  }
}