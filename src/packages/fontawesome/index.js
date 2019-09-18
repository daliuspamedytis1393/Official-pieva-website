import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
	faFacebook,
	faInstagram,
	faTwitter

} from '@fortawesome/free-brands-svg-icons'

import {
	faHeart as fasHeart
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faFacebook,
	faInstagram,
	faTwitter,
	fasHeart

)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
