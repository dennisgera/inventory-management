<template>
  <div class="container">
    <h1 class="my-4">Inventory Management System</h1>
    <AddInventoryItem @itemAdded="fetchItems" />
    <InventoryList ref="inventoryList" />
  </div>
</template>

<script>
import InventoryList from './components/InventoryList';
import AddInventoryItem from './components/AddInventoryItem';

export default {
  components: {
    InventoryList,
    AddInventoryItem
  },
  methods: {
    fetchItems() {
      this.$refs.inventoryList.fetchItems();
    }
  }
};
</script>