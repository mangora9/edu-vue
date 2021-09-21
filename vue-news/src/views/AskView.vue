<template>
  <div>
    <div v-for="ask in this.$store.state.asks" :key="ask.id">
      {{ask.title}}
    </div>
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";

export default {
  // data() {
  //   return {
  //     asks: [],
  //   };
  // },
  created() {
    this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
    //   .then((res) => {
    //     this.asks = res.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style>
</style>