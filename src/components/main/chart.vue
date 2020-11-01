<template>
  <div ref="chart"></div>
</template>

<script>
import { fetchStatistic } from "../../apis/api";
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
      this.option.series.data = this.times;
      this.option.xAsix.data = this.dates;
      this.chart = this.$refs.chart;
      this.chart.setChart(this.option);
    },
    getBeforeDate(number) {
      const num = number;
      const date = new Date();
      //let year = date.getFullYear();
      let mon = date.getMonth() + 1;
      let day = date.getDate();
      if (day <= num) {
        if (mon > 1) {
          mon = mon - 1;
        } else {
          //year = year - 1;
          mon = 12;
        }
      }
      date.setDate(date.getDate() - num);
      //year = date.getFullYear();
      mon = date.getMonth() + 1;
      day = date.getDate();
      const s =
        /* year +
        "-" + */
        (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
      return s;
    }
  },
  mounted() {
    fetchStatistic().then(res => {
      if (res.data.length == 7) {
        this.times = res.data;
      } else {
        let i;
        for (i = 0; i < 7 - res.data.length(); i++) {
          this.times[i] = 0;
        }
        this.times.push(...res.data);
      }
    });
    let j = -1;
    for (; j > -7; j--) {
      this.dates.push(this.getBeforeDate(j));
    }
    this.dates.push("今天");
    this.setChart();
  }
};
</script>

<style lang="scss"></style>
