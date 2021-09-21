<template>
	<div>
		<!--    <div v-for="ask in fetchedAsk" :key="ask.id">-->
		<!--      {{ask.title}}-->
		<!--    </div>-->
		<p v-for="item in fetchedAsk" :key="item.id">
			<router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
			<small> {{ item.time_ago }} by {{ item.user }}</small>
		</p>
	</div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";
import {mapGetters} from 'vuex';

export default {
	computed: {
		// #4
		...mapGetters(['fetchedAsk']),
		// #3
		// ...mapGetters({
		//   askItems: 'fetchedAsk',
		// })
		// #2
		// ...mapState({
		//   ask: state => state.ask,
		// }),
		// #1
		// ask() {
		//   return this.$store.state.ask;
		// }
	},
	created() {
		this.$store.dispatch('FETCH_ASK');
	}
};
</script>

<style>
</style>