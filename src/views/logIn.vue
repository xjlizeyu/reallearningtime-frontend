<template>
  <div id="logInContainer">
    <div id="logInBox"><logInBox></logInBox></div>
  </div>
</template>

<script>
import logInBox from "../components/login/logInBox";
export default {
  components: {
    logInBox
  }
};
</script>

<style lang="scss">
#logInContainer {
  @include container;
  @include log;
  #logInBox {
    @include inputBox;
  }
}
</style>
