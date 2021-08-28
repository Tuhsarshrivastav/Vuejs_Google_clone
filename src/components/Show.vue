<template>
  <div class="show">
    <div class="show__results" v-for="(result, index) in results" :key="index">
      <p class="topLink">{{ result.link }}</p>
      <p class="link">
        <a :href="result.link">{{ result.title }}</a>
      </p>
      <p class="description">
        {{ result.snippet }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: ["results"],
};
</script>

<style>
.show {
  width: 1200px;
  margin: 20px auto;
}
.show__results {
  width: 700px;
  margin-top: 20px;
}
.topLink {
  color: #202124;
  font-size: 14px;
  margin-bottom: 6px;
}
.link {
  font-size: 20px;
  text-decoration: none;
  color: #609;
  margin-bottom: 10px;
}
.description {
  color: #4d5156;
  font-size: 14px;
}
</style>
