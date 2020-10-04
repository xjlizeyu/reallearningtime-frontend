/<template>
  <div id="timerContainer">
    <div id="timerText">{{ timeHour }}:{{ timeMinute }}:{{ timeSecond }}</div>
    <div id="shade" @click="changeMode()">
      <p>{{ currText }}</p>
    </div>

    <div id="timerCircle" :style="{ '--color': currBackgroundColor }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeHour: 1,
      timeMinute: 1,
      timeSecond: 1,
      isTiming: false,
      currBackgroundColor: "white",
      currText: "开始计时"
    };
  },
  methods: {
    changeMode() {
      if (this.isTiming) {
        this.currBackgroundColor = "white";
        this.currText = "开始计时";
      } else {
        this.currBackgroundColor = "blue";
        this.currText = "停止计时";
      }
      this.isTiming = !this.isTiming;
    }
  },
  mounted() {
    //获取今天已学习时间
  }
};
</script>

<style lang="scss">
#timerContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover #shade {
    animation: emerge 1s;
    opacity: 1;
    cursor: pointer;
  }
  #shade {
    width: 200px;
    text-align: center;
    overflow: hidden;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      line-height: 100px;
      word-break: keep-all;
    }
    height: 200px;
    opacity: 0;
    position: absolute;
    border: {
      radius: 50%;
      style: solid;
      width: 1px;
    }
    top: 50%;
    z-index: 11;
    background-color: lightblue;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #timerText {
    z-index: 10;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font: {
      size: 32px;
    }
  }

  #timerCircle {
    position: relative;
    width: 220px;
    height: 220px;
    &:hover {
      cursor: pointer;
    }
    &::after {
      z-index: 5;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      border: {
        radius: 50%;
        width: 1px;
        style: solid;
      }

      width: 200px;
      height: 200px;
      background: {
        color: lightgray;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      width: 210px;
      height: 210px;
      border : {
        radius: 50%;
        bottom: 105px solid white;
      }
      background: {
        image: linear-gradient(to right, white, var(--color));
      }
      animation: rotate 10s infinite linear;
    }
  }
}
//计时器计时中动画
@keyframes rotate {
  50% {
    border-radius: 50%;
  }
  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}
//计时器鼠标浮现动画
@keyframes emerge {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 200px;
    height: 200px;
  }
}
</style>
