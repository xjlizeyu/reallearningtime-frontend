<template>
  <div>
    <div class="containBox" ref="head" id="head"></div>
    <div class="containBox" ref="statics" id="statics"></div>
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
export default {
  data() {
    return {
      currPanel: 0,
      panelNum: 3,
      clientHeight: 0
    };
  },
  methods: {
    //替换鼠标滚轮事件，实现页面整体下滑
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
  }
};
</script>

<style lang="scss">
.containBox {
  width: 100%;
}

#head {
  background-color: antiquewhite;
}
#statics {
  background-color: aquamarine;
}
#footer {
  background-color: black;
  padding: 0 25%;
}
</style>
