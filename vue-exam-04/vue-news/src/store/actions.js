import {fetchAskInfo, fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo} from "@/api";

export default {

	FETCH_NEWS(context) {
		fetchNewsList()
			.then((res) => {
				console.log(res);
				context.commit('SET_NEWS', res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
	FETCH_JOBS(context) {
		fetchJobsList()
			.then((res) => {
				context.commit('SET_JOBS', res.data);
			})
			.catch((error) => {
				console.log(error);
			})
	},
	FETCH_ASK({commit}, id) {
		fetchAskList(id)
			.then(({data}) => {
				commit('SET_ASK', data)
			})
			.catch((error) => {
				console.log(error);
			});
	},
	FETCH_USER({commit}, name) {
		fetchUserInfo(name)
			.then(({data}) => {
				commit('SET_USER', data)
			})
			.catch((error) => {
				console.log(error);
			});
	},
	FETCH_ASK_INFO({commit}, id) {
		fetchAskInfo(id)
			.then(({data}) => {
				commit('SET_ITEM', data)
			})
			.catch((error) => {
				console.log(error);
			});
	},
}