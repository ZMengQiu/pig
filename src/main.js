import Vue from 'vue'
import App from './App.vue'
import VewRouter from 'vue-router'
import router from '../src/assets/js/router.js'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import '../node_modules/mint-ui/lib/index.js'
import '../src/assets/css/reset.css'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import store from './assets/js/city.js'
import '../node_modules/swiper/dist/css/swiper.css'
import './assets/font/iconfont.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$http = axios

Vue.use(VewRouter)
Vue.use(Mint)
Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
	store
})

/* 路由跳转时进入新的页面，但位置却不在顶部，而是在上个页面浏览的位置，在每次进入新页面时，想让它定位在页面的顶部。 */
router.beforeEach((to, from, next) => {
 
	// chrome
	 
	document.body.scrollTop = 0
	 
	// firefox
	 
	document.documentElement.scrollTop = 0
	 
	// safari
	 
	window.pageYOffset = 0
	 
	next()
 
})
