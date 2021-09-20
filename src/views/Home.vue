<template>
  <div>
    <div class="row d-flex justify-content-center">
      <product
      v-for="product in products"
      :key="product.id"
      :productId="product.id"
      :thumb="`${host}/${product.thumb}`"
      :name="product.name"
      :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue';
import api, { host } from '../utils/api';

export default {
  name: 'Home',
  data() {
    return {
      host,
      products: [],
    }
  },
  components: {
    Product,
  },
  methods: {
    async getAllProducts() {
      const request = await api.get('/api/products');
      this.products = request.data;
    },
  },
  mounted() {
    this.getAllProducts();
  }
};
</script>
