import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
  data() {
    return {
      auth: false,
      token: null,
      user: null,
      totalItems: 0,
    }
  },
  mounted() {
    const getAuthToken = window.localStorage.getItem('@access:auth:token');

    if (getAuthToken) {
      const { access_token } = JSON.parse(getAuthToken);
      const getLocalUser = window.localStorage.getItem('@access:auth:user');

      this.user = JSON.parse(getLocalUser);

      const [firstName, lastName] = this.user.name.split(' ');
      this.user.name = `${firstName} ${lastName}`;

      this.token = access_token;
      this.auth = true;
    }

    const cardStorageItems = window.localStorage.getItem('@access:cart');

    if (cardStorageItems) {
      const cardItems = JSON.parse(cardStorageItems);
      this.totalItems = cardItems.length;
    }
  },
  methods: {
    userLogout() {
      this.auth = false;
      this.user = null;
      this.totalItems = 0;

      window.localStorage.clear();

      this.$router.push({ name: 'Home' });
    }
  }
}).$mount('#app');
