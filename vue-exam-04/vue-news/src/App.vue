<template>
  <div id="app">
    <!-- 
      router-view : router/index.js에 설정된 컴포넌트로 표현이 됨. 
      e.g. url이 만약 jobs면 <jobsView></jobsView>가 뿌려짐
    -->
    <!-- <router-view></router-view> -->
    <!-- 1. Strongly Recommended -->
    <tool-bar></tool-bar>
    <router-view></router-view>
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
</style>
