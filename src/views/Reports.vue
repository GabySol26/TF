<script>

</script>

<template>
  <h1>Reports</h1>
  <DataTable :value="products" tableStyle="min-width: 50rem" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
    <Column field="product" header="Product"></Column>
    <Column field="quantity" header="Quantity"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="monthly output" header="Monthly Output"></Column>
    <Column field="daily departure" header="Daily Departure"></Column>
  </DataTable>
  <DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="product" header="Product"></Column>
    <Column field="quantity" header="Quantity"></Column>
    <Column field="min amount" header="Min Amount"></Column>
    <Column field="exit price" header="Exit Price"></Column>
  </DataTable>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 50px;
}
</style>