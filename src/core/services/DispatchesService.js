import axios from "axios";

export class DispatchesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllDispatches() {
        return this.api.get('/dispatches');
    }

    createDispatch(dispatchData) {
        return this.api.post('/dispatches', dispatchData);
    }

    getDispatchesByUser1Id(user1Id) {
        return this.api.get(`/dispatches/user1/${user1Id}`);
    }

    getDispatchesByUser2Id(user2Id) {
        return this.api.get(`/dispatches/user2/${user2Id}`);
    }

    getDispatchesByMedicineId(medicineId) {
        return this.api.get(`/dispatches/medicine/${medicineId}`);
    }

    updateDispatch(id, updatedData) {
        return this.api.put(`/dispatches/${id}`, updatedData);
    }

    deleteDispatch(id) {
        return this.api.delete(`/dispatches/${id}`);
    }
}