<script>
import axios from 'axios';
export default {
    data() {
        return {
            products: []
        };
    },
    async mounted() {
        await this.fetchData();
    },
    methods:{
        async fetchData(){
            try {
                const response = await axios.get('http://gabysol26-001-site1.btempurl.com/api/v1/medicines');
                this.products = response.data.map(medicine => ({
                    cateringID: medicine.medicineID,
                    comercial: medicine.commercialName,
                    category: medicine.medicineType.typeName,
                    generic: medicine.genericName,
                    cost: medicine.costPrice
                }));
            } catch (error) {
                console.error(error);
            }
        },
        async deleteMedicine(cateringID) {
            try {
                await axios.delete(`http://gabysol26-001-site1.btempurl.com/api/v1/medicines/${cateringID}`);
                await this.fetchData();
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<template>
    <h1>Abastecimiento</h1>
    <div>
        <DataTable :value="products" class="product-table" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
            <Column field="cateringID" header="ID" class="product-id" sortable></Column>
            <Column field="category" header="Categoría" class="product-category" sortable></Column>
            <Column field="generic" header="N. Generico" class="product-responses" sortable></Column>
            <Column field="comercial" header="N. Comercial" class="product-description" sortable></Column>
            <Column field="cost" header="Precio de Costo" class="product-cost" sortable></Column>
            <Column fueld="actions" header="Actions">
                <template #body="rowData">
                    <Button label="Editar" icon="pi pi-pencial" class="p-button-warning"></Button>
                    <Button label="Eliminar" icon=" pi pi-trash" class="p-button-danger" @click="deleteMedicine(rowData.data.cateringID)"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

.product-table {
    min-width: 50rem;
}

.product-id {
    width: 10%;
}

.product-category {
    width: 30%;
}

.product-responses {
    width: 10%;
    text-align: center;
}

.product-description {
    width: 50%;
}

.p-datatable table {
    width: 100%;
    border-collapse: collapse;
}

.p-datatable th,
.p-datatable td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.p-datatable th {
    font-weight: bold;
}

.p-datatable tbody tr:hover {
    background-color: #f2f2f2;
}

.p-datatable .p-paginator {
    margin-top: 20px;
}
Button {
    margin: 5px;
}

</style>
