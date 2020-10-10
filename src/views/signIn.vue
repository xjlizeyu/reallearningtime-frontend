<template>
  <div id="signInContainer">
    <div id="signInBox"><signInBox></signInBox></div>
  </div>
</template>

<script>
import signInBox from "../components/login/signInBox";
export default {
  components: {
    signInBox
  }
};
</script>
<style lang="scss">
#signInContainer {
  @include container;
  @include sign;
  #signInBox {
    @include inputBox;
  }
}
</style>
