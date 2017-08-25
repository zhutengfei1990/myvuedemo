import Vue from 'vue'
import Router from 'vue-router'
import CompanyList from '@/components/CompanyList'
import CompanyManage from '@/components/CompanyManage'


Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'CompanyList',
			component: CompanyList
		},
		{
			path: '/home',
			component: CompanyList
		},
		{
			path: '/CompanyManage',
			component: CompanyManage
//			children: [{
//				path: 'log-time',
//				component: resolve => require(['@/components/LogTime.vue'], resolve)
//			}]
		}
	]
})