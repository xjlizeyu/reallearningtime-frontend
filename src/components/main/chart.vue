<template>
  <div ref="chart"></div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      dates: [],
      times: [],
      option: {
        title: {
          text: "过去一周学习时间统计"
        },
        tooltip: {},
        legend: { data: ["学习时间"] },
        xAsix: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: "学习时间",
            type: "bar",
            data: []
          }
        ],
        color: ["#66FF99"]
      }
    };
  },
  methods: {
    setChart() {
      this.chart = this.$refs.chart;
      this.chart.setChart(this.option);
    }
  },
  mounted() {}
};
</script>

<style lang="scss"></style>
