<template>
  <div id="timerContainer">
    <div id="timerText">{{ timeHour }}:{{ timeMinute }}:{{ timeSecond }}</div>
    <div id="shade" @click="changeMode()">
      <p>{{ currText }}</p>
    </div>

    <div id="timerCircle" :style="{ '--color': currBackgroundColor }"></div>
  </div>
</template>

<script>
import { getTime, startTiming, stopTiming } from "../../apis/api";
import { secondsToTime } from "../../utils/timeConvertUtil";
export default {
  data() {
    return {
      timer: null,
      timeHour: 0,
      timeMinute: 0,
      timeSecond: 0,

      isTiming: false,
      currBackgroundColor: "white",
      currText: "开始计时"
    };
  },
  methods: {
    setTime() {
      if (this.timeSecond == 59) {
        this.timeSecond = 0;
        if (this.timeMinute == 59) {
          this.timeMinute = 0;
          this.timeHour++;
        } else {
          this.timeMinute++;
        }
      } else {
        this.timeSecond++;
      }
    },
    changeMode() {
      if (this.isTiming) {
        //停止计时
        stopTiming().then(res => {
          if (res.data.success) {
            clearInterval(this.timer);
            alert("成功停止计时");
            this.currBackgroundColor = "white";
            this.currText = "开始计时";
          } else {
            alert(res.data.errorMessage);
          }
        });
      } else {
        //开始计时
        startTiming().then(res => {
          if (res.data.success) {
            this.currBackgroundColor = "blue";
            this.isTiming = true;
            this.timer = setInterval(this.setTime, 1000);
            alert("成功开始计时");
          } else {
            alert(res.data.errorMessage);
          }
        });
        this.currText = "停止计时";
      }
      this.isTiming = !this.isTiming;
    }
  },
  mounted() {
    //获取今天已学习时间
    getTime().then(res => {
      var t = secondsToTime(res.data);
      console.log(t);
      this.timeHour = t.hours;
      this.timeMinute = t.minutes;
      this.timeSecond = t.seconds;
    });
  }
};
</script>

<style lang="scss">
#timerContainer {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover #shade {
    animation: emerge 1s;
    opacity: 1;
    cursor: pointer;
  }
  #shade {
    width: $timer-size;
    height: $timer-size;
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
    width: $timerCircle-size;
    height: $timerCircle-size;
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

      width: $timer-size;
      height: $timer-size;
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
      width: $timerCircle-size;
      height: $timerCircle-size;
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
    width: $timer-size;
    height: $timer-size;
  }
}
</style>
