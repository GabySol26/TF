<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
            filterRuc: ''
        };
    },
    async mounted() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('http://gabysol26-001-site1.btempurl.com/api/v1/user');
                this.products = response.data.map(user => ({
                    providerID: user.userID,
                    provider: user.userName,
                    email: user.email,
                    ruc: user.userType.typeName === 'Proveedor' ? user.ruc : ''
                }));
            } catch (error) {
                console.error(error);
            }
        },

        async deleteProvider(userID){
            try{
                await axios.delete(`http://gabysol26-001-site1.btempurl.com/api/v1/user/${userID}`);
                await this.fetchData();
            } catch (error){
                console.error(error);
            }
        },

        filterTable() {
            if (this.filterRuc.trim() === '') {
                this.fetchData();
            } else {
                this.products = this.products.filter(product => product.ruc === this.filterRuc.trim());
            }
        }
    }
};
</script>

<template>
    <div>
        <h1>Providers</h1>
        <div class="filter">
            <input v-model="filterRuc" type="text" placeholder="Filter by RUC" style="width:100px">
            <button @click="filterTable">Filter</button>
        </div>
        <div >
            <DataTable :value="products" tableStyle="min-width: 50rem" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
                <Column field="providerID" header="ID" sortable></Column>
                <Column field="provider" header="Provider" sortable></Column>
                <Column field="email" header="Email" sortable></Column>
                <Column field="ruc" header="RUC" sortable></Column>
                <Column fueld="actions" header="Actions">
                    <template #body="rowData">
                        <Button label="Editar" icon="pi pi-pencial" class="p-button-warning"></Button>
                        <Button label="Eliminar" icon=" pi pi-trash" class="p-button-danger" @click="deleteProvider(rowData.data.providerID)"></Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

Button {
    margin: 5px;
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

.filter {
    margin-bottom: 10px;
}

.filter input {
    padding: 5px;
    margin-right: 10px;
}

.filter button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

.filter button:hover {
    background-color: #45a049;
}
</style>

