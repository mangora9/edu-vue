<template>
	<div>
		<ul class="news-list">
			<li class="post" v-for="job in this.$store.state.jobs" :key="job.id">
				<div class="points">
					{{ job.points || 0 }}
				</div>
				<div>
					<p class="news-title">
						<a :href="job.url">{{ job.title }}</a>
					</p>
					<small class="link-text"> {{ job.time_ago }} by {{ job.domain }}</small>
					<small class="link-text">
						{{ job.time_ago }} by
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	// data() {
	//   return {
	//     jobs: [],
	//   };
	// },
	created() {
		this.$store.dispatch('FETCH_JOBS');
		// fetchJobsList()
		//   .then((res) => {
		//     this.jobs = res.data;
		//   })
		//   .catch((error) => {
		//     console.log(error);
		//   });
	},
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