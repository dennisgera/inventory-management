<template>
  <div class="container mt-4">
    <h2>Update Inventory Item</h2>
    <form @submit.prevent="updateItem" class="form-inline">
      <input type="text" v-model="name" placeholder="Item Name" required class="form-control mr-2" />
      <input type="number" v-model="quantity" placeholder="Quantity" required class="form-control mr-2" />
      <button type="submit" class="btn btn-success">Update Item</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['item'],
  data() {
    return {
      name: this.item.name,
      quantity: this.item.quantity
    };
  },
  methods: {
    updateItem() {
      axios.patch(`http://localhost:5001/inventory/${this.item._id}`, {
        name: this.name,
        quantity: this.quantity
      })
      .then(response => {
        console.log(response.data);
        this.$emit('itemUpdated');
      })
      .catch(error => console.error(error));
    }
  },
  watch: {
    item: function(newItem) {
      this.name = newItem.name;
      this.quantity = newItem.quantity;
    }
  }
};
</script>