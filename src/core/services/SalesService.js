import axios from "axios";

export class SalesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllSales() {
        return this.api.get('/sales');
    }

    createSale(saleData) {
        return this.api.post('/sales', saleData);
    }

    getSalesByCompanyId(userId) {
        return this.api.get(`/sales/company/${userId}`);
    }

    getSalesByClientId(clientId) {
        return this.api.get(`/sales/client/${clientId}`);
    }

    getSalesByMedicineId(medicineId) {
        return this.api.get(`/sales/medicine/${medicineId}`);
    }

    updateSale(id, updatedData) {
        return this.api.put(`/sales/${id}`, updatedData);
    }

    deleteSale(id) {
        return this.api.delete(`/sales/${id}`);
    }
}