<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";

export default {
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
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