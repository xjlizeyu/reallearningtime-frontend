<template
  ><div>
    <div class="containBox" ref="head" id="head"></div>
    <div class="containBox" ref="statics" id="statics"></div>
    <div class="containBox" ref="footer" id="footer"></div>
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
    handleScroll(e) {
      e.preventDefault();
      if (e.detail > 0 || e.wheelData > 0) {
        if (this.currPanel < this.panelNum - 1) {
          this.currPanel++;
          window.scrollTo(0, this.clientHeight * this.currPanel);
        } else {
          window.scrollTo(0, document.body.scrollHeight);
        }
      } else {
        this.currPanel--;
        window.scrollTo(0, this.clientHeight * this.currPanel);
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.clientHeight = document.documentElement.clientHeight;
    this.$nextTick(() => {
      let h = document.querySelector("#head");
      let s = document.querySelector("#statics");
      h.style.height = this.clientHeight + "px";
      s.style.height = this.clientHeight + "px";
    });
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
  background-color: blueviolet;
}
</style>
