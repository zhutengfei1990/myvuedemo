<template>
  <div id="app">
  	<nav class="navbar navbar-default">
  		<div class="container">
  			<a class="navbar-brand" href="#">
  				<i class="glyphicon glyphicon-time"></i>
  				计划板
  			</a>
  			<ul class="nav navbar-nav">
  				<li><router-link to='/home'>首页</router-link></li>
  				<li><router-link to='/CompanyManage'>状态管理</router-link></li>
  			</ul>
  		</div>
  	</nav>
  	<div class="container">
  		<div class="col-sm-3">
  			<sidebar></sidebar>
  		</div>
  		<div class="col-sm-6">
    		<router-view></router-view>
  		</div>
  	</div>
  </div>
</template>

<script>
	import Sidebar from './components/Sidebar.vue'
	export default {
	  name: 'app',
	  components:{Sidebar}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
