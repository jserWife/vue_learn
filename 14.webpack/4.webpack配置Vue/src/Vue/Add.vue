<template>
  <div>
    <h2 class="title">{{ name }}</h2>
  </div>
</template>
<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: "我是第二个Vue",
    };
  },
};
</script>
<style scoped>
.title {
  color: rgb(25, 228, 69);
}
</style>