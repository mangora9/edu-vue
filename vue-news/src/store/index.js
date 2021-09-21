import Vue from 'vue'
import Vuex from 'vuex';
import {fetchAskList, fetchJobsList, fetchNewsList} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		news: [],
		jobs: [],
		asks: [],
	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = news;
		},
		SET_JOBS(state, jobs) {
			state.jobs = jobs;
		},
		SET_ASKS(state, asks) {
			state.asks = asks;
		},
	},
	actions: {
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
		FETCH_ASK({commit}) {
			fetchAskList()
				.then(({data}) => {
					commit('SET_ASKS', data)
				})
				.catch((error) => {
					console.log(error);
				});
		},

	}
})