<template>
  <div ref="chart" style="width: 600px;height:400px;"></div>
</template>

<script>
import echarts from "echarts";
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
        xAxis: {
          data: ["test", "test"]
        },
        yAxis: {},
        series: [
          {
            name: "学习时间",
            type: "bar",
            data: [10, 10, 10, 10, 10, 10, 10]
          }
        ],
        color: ["#66FF99"]
      }
    };
  },
  methods: {
    setChart() {
      this.option.series[0].data = this.times;
      this.option.xAxis.data = this.dates;

      this.chart.setOption(this.option);
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
    this.chart = echarts.init(this.$refs.chart);
    fetchStatistic().then(res => {
      if (res.data.length == 7) {
        this.times = res.data;
      } else {
        let i;
        for (i = 0; i < 7 - res.data.length; i++) {
          this.times.push(0);
        }
        this.times.push(...res.data);
      }
      let j = -6;
      for (; j < 0; j++) {
        this.dates.push(this.getBeforeDate(-1 * j));
      }
      this.dates.push("今天");
      this.setChart();
    });
  }
};
</script>

<style lang="scss"></style>
