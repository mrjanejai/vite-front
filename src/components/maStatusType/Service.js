import http from '../../http'

export default {
  get(id) {
    if (id) {
      return http.get(`/maStatusTypes/${id}`)
    }
    else {
      return http.get('/maStatusTypes' + location.search)
    }
  },
  create(data) {
    if (data) {
      return http.post('/maStatusTypes', data)
    }
    else {
      return http.get('/maStatusTypes/create')
    }
  },
  edit(id, data) {
    if (data) {
      return http.put(`/maStatusTypes/${id}`, data)
    }
    else {
      return http.get(`/maStatusTypes/${id}/edit`)
    }
  },
  delete(id, data) {
    if (data) {
      return http.delete(`/maStatusTypes/${id}`)
    }
    else {
      return http.get(`/maStatusTypes/${id}/delete`)
    }
  }
}