<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index.js";

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

<style>
</style>