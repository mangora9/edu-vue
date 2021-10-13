<template>
	<div>
		<!--    <div v-for="user in this.$store.state.news" :key="user.id">-->
		<!--      {{ user.title }}-->
		<!--    </div>-->
		<p v-for="item in fetchedNews" :key="item.id">
			<a :href="item.url">{{ item.title }}</a>
			<small>
				{{ item.time_ago }} by
				<router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
			</small>
		</p>

	</div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";
import {mapGetters} from 'vuex';

export default {
	// data() {
	//   return {
	//     users: [],
	//   };
	// },
	computed: {
		...mapGetters(['fetchedNews']),
	},
	created() {
		this.$store.dispatch('FETCH_NEWS');
		// fetchNewsList()
		//   .then((res) => {
		//     console.log(res);
		//     this.users = res.data;
		//   })
		//   .catch((error) => {
		//     console.log(error);
		//   });
	},
};
</script>

<style>
</style>