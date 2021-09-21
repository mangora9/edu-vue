import axios from "axios";

// HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
// news list 호출
function fetchNewsList() {
	// return axios.get(config.baseUrl + "news/1.json");
	return axios.get(`${config.baseUrl}news/1.json`);
}

// ask list 호출
function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}

// jobs list 호출
function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

// user info 호출
function fetchUserInfo(userName) {
	return axios.get(`${config.baseUrl}user/${userName}.json`);
}

// ask 정보 호출
function fetchAskInfo(id) {
	return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskInfo};
