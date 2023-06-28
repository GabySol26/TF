<script>
import {SalesService} from '@/core/services/SalesService';
import {ClientsService} from '@/core/services/ClientsService';
import {MedicinesService} from '@/core/services/MedicinesService';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Paginate from "vuejs-paginate-next";
import {onMounted, ref} from 'vue';
import {useStore} from 'vuex';


export default {
  components: {
    DataTable,
    Column,
    Dialog,
    Dropdown,
    Button,
    InputText,
    InputNumber,
    Paginate,
  },
  setup() {
    const salesService = new SalesService();
    const medicinesService = new MedicinesService();
    const clientsService = new ClientsService();
    const store = useStore();

    const sales = ref([]);
    const newSale = ref({
      client: {
        firstName: '',
        lastName: '',
        dni: ''
      },
      medicineID: '',
      quantity: 1
    });
    const displayNewSaleDialog = ref(false);
    const medicines = ref([]);

    const getSales = async () => {
      const response = await salesService.getAllSales();
      sales.value = response.data.map(sale => ({
        ...sale,
        saleID: sale.saleID,
        client: sale.client.firstName + ' ' + sale.client.lastName,
        medicine: sale.medicine.commercialName
      }));
    };

    const openNewSaleDialog = async () => {
      medicines.value = await medicinesService.getAllMedicines();
      if (medicines.value && medicines.value.length > 0) {
        newSale.value.medicineID = medicines.value[0].medicineID;
      }
      displayNewSaleDialog.value = true;
    };

    const cancelNewSale = () => {
      displayNewSaleDialog.value = false;
      newSale.value = {
        client: {
          firstName: '',
          lastName: '',
          dni: ''
        },
        medicineID: '',
        quantity: 1
      };
    };

    const confirmNewSale = async () => {
      const userID = store.state.user.userID;
      const clientResponse = await clientsService.createClient(newSale.value.client);
      const clientID = parseInt(clientResponse.data.clientID, 10);
      const quantity = parseInt(newSale.value.quantity, 10);
      const costPrice = parseFloat(newSale.value.medicineID.costPrice);
      const medicineID = parseInt(newSale.value.medicineID.medicineID, 10);
      const saleData = {
        userID,
        clientID,
        medicineID,
        quantity: quantity,
        totalPrice: quantity * costPrice,
        date: new Date().toISOString()
      };
      await salesService.createSale(saleData);
      displayNewSaleDialog.value = false;
      await getSales();
    };

    const deleteSale = async (id) => {
      await salesService.deleteSale(id);
      console.log('Venta eliminada:', id);
      await getSales();
    };

    onMounted(async () => {
      await getSales();
    });

    return {
      sales,
      newSale,
      displayNewSaleDialog,
      medicines,
      openNewSaleDialog,
      cancelNewSale,
      confirmNewSale,
      deleteSale,
    };
  }
};
</script>

<template>
  <div>
    <h1>Sales</h1>
    <Button label="Nueva Venta" icon="pi pi-plus" @click="openNewSaleDialog"/>

    <Dialog header="Nueva Venta" v-model:visible="displayNewSaleDialog" v-if="medicines.length">
      <h3>Datos del cliente</h3>
      <InputText v-model="newSale.client.firstName" placeholder="Nombres"/>
      <InputText v-model="newSale.client.lastName" placeholder="Apellidos"/>
      <InputText v-model="newSale.client.dni" placeholder="DNI"/>

      <h3>Medicina</h3>
      <Dropdown v-model="newSale.medicineID" :options="medicines" optionLabel="commercialName"/>

      <h3>Cantidad</h3>
      <InputNumber v-model="newSale.quantity"/>

      <div>
        <Button label="Cancelar" icon="pi pi-times" @click="cancelNewSale"/>
        <Button label="Aceptar" icon="pi pi-check" @click="confirmNewSale"/>
      </div>
    </Dialog>

    <DataTable :value="sales" tableStyle="min-width: 50rem" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
      <Column field="saleID" header="ID" sortable></Column>
      <Column field="client" header="Client" sortable></Column>
      <Column field="medicine" header="Medicine" sortable></Column>
      <Column field="quantity" header="Quantity" sortable></Column>
      <Column field="date" header="Sale Date" sortable></Column>
      <Column field="totalPrice" header="Total Price" sortable></Column>
      <Column field="Actions" header="Actions">
        <template #body="rowData">
          <Button label="Editar" icon="pi pi-pencil" class="p-button-warning" @click="editSale(rowData)"></Button>
          <Button label="Eliminar" icon="pi pi-trash" class="p-button-danger"
                  @click="() => deleteSale(rowData.data.saleID)"></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
Button {
  margin: 5px;
}
</style>
