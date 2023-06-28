import axios from 'axios';

export class MedicineTypesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://gabysol26-001-site1.btempurl.com/api/v1',
            headers: { 'Content-type': 'application/json' }
        });
    }

    getAllMedicineTypes() {
        return this.api.get('/medicinetypes');
    }

    createMedicineType(medicineTypeData) {
        return this.api.post('/medicinetypes', medicineTypeData);
    }

    updateMedicineType(id, updatedData) {
        return this.api.put(`/medicinetypes/${id}`, updatedData);
    }

    deleteMedicineType(id) {
        return this.api.delete(`/medicinetypes/${id}`);
    }
}
