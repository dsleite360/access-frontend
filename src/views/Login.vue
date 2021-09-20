<template>
  <div class="row d-flex justify-content-center" id="login-form">
    <div class="col-md-4">
      <div v-if="error" class="alert alert-danger">
        {{ error }}
      </div>

      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input v-model="email" required class="form-control" id="email" type="email" placeholder="Digite seu e-mail">
        </div>

        <div class="form-group mt-3">
          <label for="password">Senha:</label>
          <input v-model="password" required class="form-control" id="password" type="password" placeholder="Digite sua senha">
        </div>

        <button class="btn btn-sm btn-primary mt-4" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../utils/api';

export default {
  data() {
    return {
      error: null,
      email: '',
      password: '',
    }
  },
  methods: {
    async loginUser() {
      try {
        const requestLogin = await api.post('api/auth/login', {
          email: this.email,
          password: this.password,
        });

        const token = requestLogin.data.access_token;

        window.localStorage.setItem('@access:auth:token',
          JSON.stringify(
            requestLogin.data
          )
        );

        const requestUser = await api.get('api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        window.localStorage.setItem('@access:auth:user', JSON.stringify(requestUser.data));

        this.$root.user = requestUser.data;
        this.$root.token = token;
        this.$root.auth = true;

        this.error = null;

        this.$router.push({ name: 'Home' });
      } catch (err) {
        this.error = 'Usuário ou senha incorretos'
        console.log(this.$root.auth);
      }
    }
  },
  mounted() {
    if (this.$root.auth) {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style lang="scss">
  #login-form {
    button {
      width: 100%;
    }

    label {
      font-weight: bold;
    }
  }
</style>
