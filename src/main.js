import Vue from 'vue'
import App from './App.vue'
import router from '@/packages/vue-router'
import VueInstagram from 'vue-instagram'
import '@/assets/scss/style.scss'
import '@/packages/vue-axios'
import '@/packages/fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueClazyLoad from 'vue-clazy-load'
import StarRating from 'vue-star-rating'
import VeeValidate from 'vee-validate';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(VeeValidate);
Vue.use(VueClazyLoad)
Vue.use(VueInstagram)
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAEfg1X-aaDH8YisS8sz4AcaUCxF7CtBiE',
		libraries: 'places'
	}
})

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
	if (!to.meta.displayPageTitle) {
		to.matched.some(record => {
			if (record.meta.displayPageTitle) {
				to.meta.displayPageTitle = record.meta.displayPageTitle
				next()
			}
		})
	}
	next()
})

Vue.component('star-rating', StarRating)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('modal', {
	template: '#modal-template'
})

// start app
new Vue({
	data: {
	  showModal: false
	}
})

new Vue({
	render: h => h(App),
	router

}).$mount('#app')
