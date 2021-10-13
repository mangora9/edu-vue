<template>
	<div>
		{{ fetchedItem }}
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	computed: {
		...mapGetters(['fetchedItem']),
	},
	created() {
		const id = this.$route.params.id
		console.log('id > ', id);
		this.$store.dispatch('FETCH_ASK_INFO', id);
	}
}
</script>

<style scoped>

</style>