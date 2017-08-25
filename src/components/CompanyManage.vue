<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-12">
				<label>公司</label>
				<input type="text" class="form-control" v-model="companyName" placeholder="公司名字" />
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-6">
				<label>投递日期</label>
				<input type="date" class="form-control" v-model="tdate" />
			</div>
			<div class="col-sm-6">
				<label>笔试时间</label>
				<input type="date" class="form-control" v-model="edate" />
			</div>
		</div>
		<button class="btn btn-primary" @click="save()">保存</button>
		<router-link to="/" class="btn btn-danger">取消</router-link>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default{
		data (){
			return {
				tdate:'', //投递时间
				edate:'', //笔试时间
				companyName:''//公司名称
			}
		},
		methods:{
			...mapActions([
				'addRecord'
			]),
			save(){
				let record={
					tdate:this.tdate,
					edate:this.edate,
					companyName:this.companyName
				}
				this.addRecord(record)
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>