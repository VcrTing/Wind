
import Vue from 'vue'

import App from './App'

import store from './common/store'
import router from './common/router'
import i18n from './common/plugin/i18n'

import conf from './conf'
import api from '@/air/net/api'
import conn from '@/air/net/network/service';

import viewed from '@/air/es/viewed'
import validate from '@/air/es/validate'
import strapi from '@/air/es_strapi/strapi'

Vue.prototype.api = api
Vue.prototype.conn = conn
Vue.prototype.view = viewed

Vue.prototype.conf = conf
Vue.prototype.strapi = strapi
Vue.prototype.validate = validate

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
