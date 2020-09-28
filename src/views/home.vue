<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    handleScroll(e) {
      e.preventDefault();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll());
  }
};
</script>
