<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-12 d-flex justify-content-end">
        <button class="btn btn-success">Realizar Pedido</button>
      </div>
    </div>

    <div class="row" id="product-checkout">
      <card-item />
      <card-item />
      <card-item />
      <card-item />
    </div>
  </div>
</template>

<script>
import CardItem from '../components/CardItem.vue';

export default {
  components: {
    CardItem,
  }
}
</script>
