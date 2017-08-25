import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state={
	totalCount:6,
	storage:'',
	companyList:[{
			companyName:'公司名字',
			//投递时间
			deliveryTime:'2010-10-10',
			//笔试时间
			examTime:'2010-10-10'
		},
		{
			companyName:'公司名字',
			//投递时间
			deliveryTime:'2010-10-10',
			//笔试时间
			examTime:'2010-10-10'
		}
		]
	}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
