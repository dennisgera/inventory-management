<template>
  <div>
    <h2>Add Inventory Item</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="name" placeholder="Item Name" required />
      <input type="number" v-model="quantity" placeholder="Quantity" required />
      <button type="submit">Add Item</button>
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