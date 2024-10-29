// components/HosxpOfficer/service.js
import http from '../../http';

export default {
  getOfficers(params) {
    // ใช้ในการดึงข้อมูล officer พร้อม query parameters สำหรับการแบ่งหน้า
    return http.get('/hosxpOfficer', { params });
  },
  getOfficerById(id) {
    // ใช้ในการดึงข้อมูล officer เฉพาะตาม ID
    return http.get(`/hosxpOfficer/${id}`);
  },
  editOfficer(id, data) {
    // ใช้ในการแก้ไขข้อมูล officer เฉพาะ role
    return http.put(`/hosxpOfficer/${id}/edit`, data);
  }
};
