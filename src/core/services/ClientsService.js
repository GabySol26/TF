import axios from "axios";

export class ClientsService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllClients() {
        return this.api.get('/clients');
    }

    createClient(clientData) {
        return this.api.post('/clients', clientData);
    }

    updateClient(id, updatedData) {
        return this.api.put(`/clients/${id}`, updatedData);
    }

    deleteClient(id) {
        return this.api.delete(`/clients/${id}`);
    }
}