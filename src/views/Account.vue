<template>
    <div class="container">
      <h3>Meus Pedidos</h3>
    </div>
</template>

<script>
import api from '../utils/api';

export default {
  data(){
    return {
      purchase: [],
    }
  },
  methods: {
    async getAllPuchase() {
      const request = await api.get('api/purchases', {
        headers: {
          Authorization: `Bearer ${this.$root.token}`,
        }
      });

      this.purchase = request.data;
    }
  },
  mounted() {
    if (!this.$root.auth) {
      this.$router.push({ name: 'Login' });
      return;
    }

    this.getAllPuchase();
  }
}
</script>
