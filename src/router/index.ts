import { createRouter, createWebHistory } from 'vue-router'
// import Register from '@/components/Register.vue'
// import Login from '@/components/Login.vue'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		// {
		// 	path: '/calendar',
		// 	name: 'Calendar',
		// 	component: () => import('../views/Calendar.vue')
		// },
		// {
		// 	path: '/users',
		// 	name: 'Users',
		// 	component: () => import('../views/Users.vue')
		// },
		// {
		// 	path: '/register',
		// 	name: 'Register',
		// 	component: Register
		// },
		// {
		// 	path: '/login',
		// 	name: 'Login',
		// 	component: Login
		// }
	]
})

export default router
