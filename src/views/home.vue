<template>
  <div>
    <div class="containBox" ref="head" id="head">
      <timer ref="timer"></timer>
    </div>
    <div class="containBox" ref="statics" id="statics">
      <chart></chart>
    </div>
    <div class="containBox" ref="footer" id="footer">
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import timer from "../components/main/timer";
import chart from "../components/main/chart";
export default {
  components: {
    timer,
    chart
  },
  data() {
    return {
      currPanel: 0,
      panelNum: 3,
      clientHeight: 0
    };
  },
  methods: {
    //替换鼠标滚轮事件，实现页面整体下滑
    //TODO:解决多次快速滑动滚轮会多次触发事件
    handleScroll(e) {
      e.preventDefault();
      console.log(e);
      if (e.detail > 0 || e.deltaY > 0) {
        if (this.currPanel < this.panelNum - 1) {
          this.currPanel++;
          this.scrollTo(0, this.clientHeight * this.currPanel);
        } else {
          this.scrollTo(0, document.body.scrollHeight);
        }
      } else {
        if (this.currPanel > 0) {
          this.currPanel--;
          this.scrollTo(0, this.clientHeight * this.currPanel);
        }
      }
    },

    //实现滑块平滑动
    scrollTo(x, target) {
      var currentPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      var speed = 20;
      //设置计时器每次滑动较小距离
      var timer = setInterval(() => {
        currentPosition =
          document.documentElement.scrollTop || document.body.scrollTop;
        //提前退出滑动
        if (Math.abs(currentPosition - target) <= speed) {
          window.scrollTo(0, target);
          clearInterval(timer);
        } else if (currentPosition != target) {
          window.scrollTo(
            0,
            currentPosition > target
              ? currentPosition - speed
              : currentPosition + speed
          );
          if (
            currentPosition == document.documentElement.scrollTop ||
            document.body.scrollTop
          ) {
            clearInterval(timer);
          }
        } else {
          clearInterval(timer);
        }
      }, 10);
    }
  },

  mounted() {
    window.addEventListener("wheel", this.handleScroll, { passive: false });
    this.clientHeight = document.documentElement.clientHeight;
    this.$nextTick(() => {
      let h = document.querySelector("#head");
      let s = document.querySelector("#statics");
      h.style.height = this.clientHeight + "px";
      s.style.height = this.clientHeight + "px";
    });
    this.currPanel = 0;
  },
  beforeRouteLeave(to, from, next) {
    if (this.$refs.timer.isTiming) {
      next(false);
      window.console("计时未停止");
    } else {
      next(true);
    }
  }
};
</script>

<style lang="scss">
.containBox {
  position: relative;
  width: 100%;
}

#head {
  background-color: yellowgreen;
}
#statics {
  background-color: rgba($color: #ffffff, $alpha: 0);
}
#footer {
  background-color: black;
  padding: 0 25%;
}
</style>
