<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-6">
				<label>日期</label>
				<input type="date" class="form-control" v-model="date" placeholder="Date" />
			</div>
			<div class="col-sm-6">
				<label>时间</label>
				<input type="number" class="form-control" v-model="totalTime" placeholder="Hours" />
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>备注</label>
				<input type="text" class="form-control" v-model="comment" placeholder="Comments" />
			</div>
		</div>
		<button class="btn btn-primary" @click="save()">保存</button>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'LogTime',
		data() {
			return {
				date: '',
				totalTime: '',
				comment: ''
			}
		},
		methods: {
			...mapActions([
				'savePlan', //映射this.savePlan为this.$store.dispatch('savaPlan')
			]),
			...mapActions({
				add:'addTotalTime' //映射this.savePlan为this.$store.dispatch('savaPlan')
			}),
			
			save() {
				const plan = {
					date: this.date,
					totalTime: this.totalTime,
					comment: this.comment
				}
				this.savePlan(plan)
				this.add(this.totalTime)
//				this.$store.dispatch('savePlan',plan) //dispatch参数是action
//				this.$store.dispatch('addTotalTime', this.totalTime)
				this.$router.go(-1)
			}
		}
	}
</script>

<style>

</style>