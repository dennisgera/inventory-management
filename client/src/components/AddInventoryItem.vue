<template>
  <div class="container mt-4">
    <h2>Add Inventory Item</h2>
    <form @submit.prevent="addItem" class="form-inline">
      <input type="text" v-model="name" placeholder="Item Name" required class="form-control mr-2" />
      <input type="number" v-model="quantity" placeholder="Quantity" required class="form-control mr-2" />
      <button type="submit" class="btn btn-primary">Add Item</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      quantity: ''
    };
  },
  methods: {
    addItem() {
      axios.post('http://localhost:5001/inventory', {
        name: this.name,
        quantity: this.quantity
      })
      .then(response => {
        console.log(response.data);
        this.name = '';
        this.quantity = '';
        this.$emit('itemAdded');
      })
      .catch(error => console.error(error));
    }
  }
};
</script>