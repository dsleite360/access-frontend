<template>
  <div class="col-12 mb-3" id="card-item">
    <img class="img-fluid" src="https://a-static.mlcdn.com.br/618x463/chaleira-com-apito-em-aco-inox-21-litros-tramontina/emporiopalotina2/19171p/b21af3dd050867aac0a8d5f5db31c5b0.jpg" alt="">
    <p>Chaleira de Prata home lar</p>

    <p>R$ 66,00</p>

    <div id="item-actions">
      <input v-model="qtd" type="number" name="qtd">
      <button class="btn btn-sm btn-danger">Remover</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qtd: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  #card-item {
    background: #f1f1f1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-radius: 8px;

    img {
      width: 160px;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      margin-left: 15px;
    }

    #item-actions {
      display: flex;
      flex-direction: column;
      width: 80px;

      input {
        margin-bottom: 6px;
        text-align: center;
      }
    }
  }
</style>
