import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import Gallery from '@/views/Gallery.vue'
import About from '@/views/About.vue'
import RateUs from '@/views/RateUs.vue'
import Contacts from '@/views/Contacts.vue'

export default [
	{
		name: 'Home',
		path: '/',
		component: Home,
		meta: {
			displayName: 'Pieva'
		}
	},
	{
		name: 'Menu',
		path: '/menu',
		component: Menu,
		meta: {
			displayName: 'Meniu'
		}
	},
	{
		name: 'About',
		path: '/about',
		component: About,
		meta: {
			displayName: 'Kas mes ?',
			displayPageTitle: 'Kas mes ?'
		}
	},
	{
		name: 'Gallery',
		path: '/gallery',
		component: Gallery,
		meta: {
			displayName: 'Galerija',
			displayPageTitle: 'Mūsų nuotykiai'
		}
	},
	{
		name: 'RateUs',
		path: '/RateUs',
		component: RateUs,
		meta: {
			displayName: 'Įvertinkite mus'
		}
	},
	{
		name: 'Contacts',
		path: '/contacts',
		component: Contacts,
		meta: {
			displayName: 'Kontaktai',
			displayPageTitle: 'Susisiekite su mumis'
		}
	}
]
