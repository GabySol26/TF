import axios from "axios";

export class InventoriesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllInventories() {
        return this.api.get('/inventories');
    }

    createInventory(inventoryData) {
        return this.api.post('/inventories', inventoryData);
    }

    getInventoriesByUserId(userId) {
        return this.api.get(`/inventories/user/${userId}`);
    }

    getInventoriesByMedicineId(medicineId) {
        return this.api.get(`/inventories/medicine/${medicineId}`);
    }

    updateInventory(id, updatedData) {
        return this.api.put(`/inventories/${id}`, updatedData);
    }

    deleteInventory(id) {
        return this.api.delete(`/inventories/${id}`);
    }
}