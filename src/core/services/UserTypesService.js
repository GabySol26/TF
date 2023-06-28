import axios from 'axios';

export class UserTypesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllUserTypes() {
        return this.api.get('/usertypes');
    }

    createUserType(userData) {
        return this.api.post('/usertypes', userData);
    }

    updateUserType(id, updatedData) {
        return this.api.put(`/usertypes/${id}`, updatedData);
    }

    deleteUserType(id) {
        return this.api.delete(`/usertypes/${id}`);
    }
}