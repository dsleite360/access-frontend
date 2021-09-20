<template>
  <div id="app">
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
      <router-link class="nav-link" to="/">
          <b class="text-primary">Access</b> Commerce
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
              <router-link v-if="$root.auth" class="nav-link font-weight-bold" to="/account">{{ $root.user.name }}</router-link>
              <router-link v-else class="nav-link" to="/login">login</router-link>
          </li>
          <li class="nav-item">
              <button @click="$root.userLogout" v-if="$root.auth" class="nav-link btn btn-link">Sair</button>
          </li>
          <li class="nav-item mt-1">
            <router-link id="cart-btn" class="btn btn-sm btn-primary my-2 my-sm-0" to="/cart">
              Carrinho <span class="badge badge-light">{{ $root.totalItems }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </header>

    <main class="container mt-5">
      <transition>
        <router-view />
      </transition>
    </main>

  </div>
</template>

<script>
import { BIcon, BIconCart } from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconCart,
  }
}
</script>

<style lang="scss">
  .badge-light {
    color: #181818;
    background: #fff;
  }

  #cart-btn {
    span {
      color: #060606;
    }
  }
</style>
