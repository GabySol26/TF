<script>

</script>

<template>
  <h1>Inventory</h1>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
      <Column field="inventoryID" header="ID"></Column>
      <Column field="product" header="Product"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="date of admission" header="Date of admission"></Column>
      <Column field="departure date" header="Departure Date"></Column>
      <Column field="provider" header="Provider"></Column>
      <Column field="cost price" header="Cost Price"></Column>
      <Column field="saleprice" header="Sale Price"></Column>
    </DataTable>
  </div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 50px;
}
</style>