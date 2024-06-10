<template>
  <div class="container mt-4">
    <h2>Inventory List</h2>
    <ul class="list-group">
      <li v-for="item in items" :key="item._id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ item.name }} - {{ item.quantity }}
        <button @click="selectItem(item)" class="btn btn-warning btn-sm">Update</button>
      </li>
    </ul>
    <UpdateInventoryItem v-if="selectedItem" :item="selectedItem" @itemUpdated="fetchItems" />
  </div>
</template>

<script>
import axios from 'axios';
import UpdateInventoryItem from './UpdateInventoryItem';

export default {
  components: {
    UpdateInventoryItem
  },
  data() {
    return {
      items: [],
      selectedItem: null
    };
  },
  methods: {
    fetchItems() {
      axios.get('http://localhost:5001/inventory')
        .then(response => this.items = response.data)
        .catch(error => console.error(error));
    },
    selectItem(item) {
      this.selectedItem = item;
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>