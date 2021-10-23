<template>
	<div>
		<ul class="news-list">
			<li class="post" v-for="ask in fetchedAsk" :key="ask.id">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ ask.points}}
				</div>

				<!-- 기타 정보 영역 -->
				<div>
					<p class="news-title">
						<a :href="`/item/${ask.id}`">{{ ask.title }}</a>

					</p>
					<small class="link-text">
						{{ ask.time_ago }} by
						<router-link :to="`/user/${ask.user}`" class="link-text">{{ ask.user }}</router-link>
					</small>
				</div>
			</li>
		</ul>
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



<style scoped>
.news-list {
	margin: 0;
	padding: 0;
}
.post {
	list-style: none;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points {
	width: 80px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #42b883;
}
.news-title {
	margin: 0;
}
.link-text {
	color: #828282;
}
</style>