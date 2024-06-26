import http from '../../http';

export default {
  getPopulationStatus() {
        return http.get('/patient/population-status');
    },
    getPopulationSex() {
        return http.get('/patient/population-sex');   
    },
    getPopulationNationality() {
        return http.get('/patient/population-nat');
    },
    getPopulationOcc() {
        return http.get('/patient/population-occ');
    }
};
