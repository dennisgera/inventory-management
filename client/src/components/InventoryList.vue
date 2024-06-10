<template>
  <div>
    <h2>Inventory List</h2>
    <ul>
      <li v-for="item in items" :key="item._id">{{ item.name }} - {{ item.quantity }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    fetchItems() {
      axios.get('http://localhost:5001/inventory')
        .then(response => this.items = response.data)
        .catch(error => console.error(error));
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>