<template>
	<div>
		<div class="panel panel-default" v-for="item in companyList">
		  <div class="panel-heading">{{item.companyName}}</div>
		  <div class="panel-body">
		  	<p>简历投递时间：{{(item.deliveryTime)||'暂无时间'}}</p>
		   	<p>笔试时间：{{item.examTime||'暂无时间'}}</p>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'companyList',
		data() {
			return {
				
			}
		},
		computed:{
			companyList(){
				return this.$store.state.companyList	
			}
		}
	}
</script>

<style>
	.companyName{
		font-size: 25px;
	}
</style>