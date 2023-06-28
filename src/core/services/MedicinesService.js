import axios from "axios";

export class MedicinesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    async getAllMedicines() {
        const response = await this.api.get('/medicines');
        return response.data;
    }

    createMedicine(medicineData) {
        return this.api.post('/medicines', medicineData);
    }

    getMedicinesByMedicineTypeId(medicineTypeId) {
        return this.api.get(`/medicines/medicinetype/${medicineTypeId}`);
    }

    updateMedicine(id, updatedData) {
        return this.api.put(`/medicines/${id}`, updatedData);
    }

    deleteMedicine(id) {
        return this.api.delete(`/medicines/${id}`);
    }
}