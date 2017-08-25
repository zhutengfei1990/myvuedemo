<template>
	<div>
		<div>
			<router-link v-if="$route.path!=='/time-entries/log-time'" to='/time-entries/log-time' class="btn btn-primary">
				创建
			</router-link>
		</div>

		<div v-if="$route.path==='/time-entries/log-time'">
			<h3>创建</h3>
		</div>

		<hr />
		<transition
		    name="custom-classes-transition"
		    enter-active-class="animated bounceInRight"
		    leave-active-class="animated bounceOutRight"
		  style="overflow: hidden;" >
			<router-view></router-view>
		</transition>

		<div class="time-entries mt">
			<p v-if="!plans.length"><strong>还没有任何计划</strong></p>
			<ul class="list-group">
				<li class="list-group-item" v-for="(plan,index) in plans">
					<i class="glyphicon glyphicon-time timeLogo"></i> 
					<a>{{ plan.totalTime }}</a>
					
					<i class="glyphicon glyphicon-calendar timeLogo"></i> 
							{{ plan.date }}
					<p>{{ plan.comment }}</p>
					<button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">X</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TimeEntries',
		computed: {
			plans() {
				//共享数据
				return this.$store.state.list
			}
		},
		methods: {
			deletePlan(idx) {
				//减去总时间
				this.$store.dispatch('decTotalTime', this.plans[idx].totalTime)
				//删除该计划
				this.$store.dispatch('deletePlan', idx)
			}
		}
	}
</script>

<style>
	.mt{
		margin-top: 10px;
	}
	.timeLogo{
		font-size: 50px;
	}
	
	.user-details {
		background-color: #f5f5f5;
		border-right: 1px solid #ddd;
		margin: -10px 0;
	}
	
	.time-block {
		padding: 10px;
	}
	
	.comment-section {
		padding: 20px;
	}
</style>