<template>
	<div id="app">
		<!--
			router-view : router/index.js에 설정된 컴포넌트로 표현이 됨.
			e.g. url이 만약 jobs면 <jobsView></jobsView>가 뿌려짐
		-->
		<!-- <router-view></router-view> -->
		<!-- 1. Strongly Recommended -->
		<tool-bar></tool-bar>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
	components: {
		ToolBar,
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}

a {
	color: #344953;
	text-decoration: none;
}

a:hover {
	color: #42b883;
	text-decoration: underline;
}

a.router-link-exact-active {
	text-decoration: underline;
}
/* Router Transition */
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
