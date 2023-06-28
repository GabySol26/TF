import axios from 'axios';

export class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    signInUser(userData) {
        return this.api.post('/user/sign-in', userData);
    }

    signUpUser(userData) {
        return this.api.post('/user/sign-up', userData);
    }

    getUsers() {
        return this.api.get('/user');
    }

    getUserById(id) {
        return this.api.get(`/user/${id}`);
    }

    updateUser(id, updatedData) {
        return this.api.put(`/user/${id}`, updatedData);
    }

    deleteUser(id) {
        return this.api.delete(`/user/${id}`);
    }
}
