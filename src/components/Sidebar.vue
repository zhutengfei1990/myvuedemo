<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h1 class="text-center">已投公司</h1>
		</div>
		<div class="panel-body">
			<h1 class="text-center">{{totalCount}}个</h1>
		</div>
	</div>
</template>

<script>
//	import {GetterState} from 'vuex'
	export default{
		computed:{
			totalCount(){
				return this.$store.state.companyList.length
			}
		}
	}
</script>

<style>
</style>