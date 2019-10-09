import VueRouter from 'vue-router'
import index from '../../component/index.vue'
import search from '../../component/search.vue'
import login from '../../component/login.vue'
import down from '../../component/down.vue'
import ticket from '../../component/ticket.vue'
import fined from '../../component/fined.vue'
import destination from '../../component/destination.vue'
import details from '../../component/details.vue'
import order from '../../component/order.vue'
import city from '../../component/city.vue'
import city0 from '../../component/city0.vue'

export default new VueRouter({
	routes:[
			{
				path:"/",component:index,
				redirect:"/index"
			},
			{
				path:'/index',component:index
			},
			{
				path:'/search',component:search
			},
			{
				path:'/login',component:login
			},
			{
				path:'/down',component:down
			},
			{
				path:'/ticket',component:ticket,
			},
			{
				path:'/fined',component:fined
			},
			{
				path:'/destination',component:destination
			},
			{
				path:'/details',component:details
			},
			{
				path:'/order',component:order
			},
			{
				path:'/city',component:city
			},
			{
				path:'/city0',component:city0
			},
			{
				path:'/details/:m',component:details
			}
		]
})

