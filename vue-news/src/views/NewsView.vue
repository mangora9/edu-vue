<template>
  <div>
    <div v-for="user in users" :key="user.id">
      {{ user }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => {
        console.log(res);
        this.users = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>