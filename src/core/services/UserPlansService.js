import axios from "axios";

export class UserPlansService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllUserPlans() {
        return this.api.get('/userplans');
    }

    createUserPlan(userData) {
        return this.api.post('/userplans', userData);
    }

    updateUserPlan(id, updatedData) {
        return this.api.put(`/userplans/${id}`, updatedData);
    }

    deleteUserPlan(id) {
        return this.api.delete(`/userplans/${id}`);
    }
}