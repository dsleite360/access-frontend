<template>
  <div class="col-md-3 col-3 col-lg-3 shadow-sm mb-3" id="product-card">
    <div class="card-body">
      <img
      :src="thumb"
      :alt="name"
      >
      <p>{{ name }}</p>
      <p class="text-muted">R$ {{ price }}</p>
      <button @click="addToCart" class="btn btn-sm btn-primary btn-block">Adicionar ao Carrinho</button>
    </div>
  </div>
</template>

<style lang="scss">
  #product-card {
    background: #ffff;
    padding: 15px 20px;
    border-radius: 6px;
    margin-right: 8px;
  }

  #product-card div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #product-card p {
    font-size: 17px;
    font-weight: bold;
  }

  #product-card button {
    width: 100%;
  }

  #product-card img {
    width: 150px;
  }
</style>

<script>
export default {
  props: ['productId', 'thumb', 'name', 'price'],
  methods: {
    async addToCart() {
      const cart = window.localStorage.getItem('@access:cart');

      if (!cart) {
        const newItem = [this.productId];
        window.localStorage.setItem('@access:cart', JSON.stringify([this.productId]));
        this.$root.totalItems = newItem.length;
        return;
      }

      const productsCart = JSON.parse(cart);

      productsCart.push(this.productId);

      window.localStorage.setItem('@access:cart', JSON.stringify(productsCart));
      this.$root.totalItems = productsCart.length;
    }
  }
};
</script>
