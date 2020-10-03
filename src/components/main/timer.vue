/<template>
  <div id="timerContainer">
    <div id="timerText">{{ timeHour }}:{{ timeMinute }}:{{ timeSecond }}</div>
    <div id="timerCircle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeHour: 1,
      timeMinute: 1,
      timeSecond: 1
    };
  }
};
</script>

<style lang="scss">
#timerContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  #timerText {
  }

  #timerCircle {
    position: relative;
    width: 300px;
    height: 300px;
    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      border: {
        radius: 50%;
      }
      width: 200px;
      height: 200px;
      background: {
        color: lightgreen;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      width: 210px;
      height: 210px;
      border : {
        radius: 50%;
        bottom: 105px solid white;
      }
      background: {
        image: linear-gradient(to right, white, blue);
      }
      animation: rotate 10s infinite linear;
    }
  }
}
@keyframes rotate {
  50% {
    border-radius: 50%;
  }
  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}
</style>
