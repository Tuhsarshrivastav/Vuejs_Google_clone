<template>
  <div class="result">
    <div class="result__img">
      <img src="../assets/smallGoogle.png" alt="google logo" @click="goBack" />
    </div>
    <form class="formContainer__form resultForm" @submit.prevent="search">
      <input type="text" class="formContainer__input" v-model="keyword" />
      <svg
        width="1.1em"
        height="1.1em"
        viewBox="0 0 16 16"
        class="bi bi-search searchIcon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        />
        <path
          fill-rule="evenodd"
          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        />
      </svg>
      <svg
        width="1.3em"
        height="1.3em"
        viewBox="0 0 16 16"
        class="bi bi-mic microphone"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
        />
      </svg>
    </form>
  </div>
  <Show :results="googleResults" />
</template>

<script>
import axios from "axios";
import Show from "./Show";
export default {
  name: "Results",
  components: {
    Show,
  },
  data() {
    return {
      api_key: "AIzaSyB2QI43TrRXyetZqE9 - OqJQLA17FgHJ - fo",
      cx: "8dd7c4e145d5ec754",
      keyword: this.$route.params.query
        ? this.$route.params.query.split("-").join(" ")
        : "",
      googleResults: [],
    };
  },
  methods: {
    async search() {
      const newQuery = this.keyword.split(" ").join("-");
      this.$router.push({
        name: "Result",
        params: { query: newQuery },
      });
      try {
        const res = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${this.api_key}&cx=${this.cx}&q=${this.keyword}`
        );
        this.googleResults = res.data.items;
        console.log(this.googleResults);
      } catch (error) {
        console.log(error);
      }
    },
    goBack() {
      this.$router.push("/");
    },
  },
  async created() {
    if (this.$route.params.query) {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${this.api_key}&cx=${this.cx}&q=${this.keyword}`
        );
        this.googleResults = res.data.items;
        console.log(this.googleResults);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style>
.result {
  width: 1200px;
  margin: 35px auto;
  display: flex;
  align-items: center;
}
.result__img img {
  width: 92;
  height: 30px;
  cursor: pointer;
}
.resultForm {
  width: 600px;
  margin-left: 20px;
}
.resultForm .formContainer__input {
  width: 100% !important;
}
</style>
