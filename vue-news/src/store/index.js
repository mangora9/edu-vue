import Vue from 'vue'
import Vuex from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		news: [],
		jobs: [],
		ask: [],
		user: {},
		item: {},
	},
	getters: {
		fetchedNews(state) {
			return state.news;
		},
		fetchedAsk(state) {
			return state.ask;
		},
		fetchedItem(state) {
			return state.item;
		},
	},
	mutations,
	actions,
})