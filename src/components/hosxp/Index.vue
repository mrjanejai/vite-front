<template>
    <div class="d1">&nbsp;สัดส่วน เพศ อายุ ของผู้ป่วย<br /><AreaChart /></div>
    <div class="d2">&nbsp;สัดส่วน สัญชาติ อายุ ของผู้ป่วย<br /><BarChart /></div>
    <div class="d3">&nbsp;กองทุน 3<br /><BubbleChart /></div>
    <div class="d4">&nbsp;กองทุน 4<br /><LineChart /></div>
    <div class="d5">&nbsp;กองทุน 5<br /><PieChart /></div>
    <div class="d6">&nbsp;กองทุน 6<br /><RadarChart /></div>
    <div>
    <apexchart type="bar" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import Service from './service';
import AreaChart from '../apexCharts/AreaChart.vue';
import BarChart from '../apexCharts/BarChart.vue';
import BubbleChart from '../apexCharts/BubbleChart.vue';
import LineChart from '../apexCharts/LineChart.vue';
import PieChart from '../apexCharts/PieChart.vue';
import RadarChart from '../apexCharts/RadarChart.vue';

export default {
  components: {
    apexchart: VueApexCharts,
    AreaChart,
    BarChart,
    BubbleChart,
    LineChart,
    PieChart,
    RadarChart
  },
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px'
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100+']
        }
      }
    };
  },
  mounted() {
    this.getPopulationData();
  },
  methods: {
    getPopulationData() {
      Service.getPopulationData().then(response => {
        const data = response.data;
        this.series = [
          {
            name: 'Male',
            data: data.male
          },
          {
            name: 'Female',
            data: data.female
          },
          {
            name: 'Nation Thai',
            data: data.nation_thai
          },
          {
            name: 'Nation Other',
            data: data.nation_other
          },
          {
            name: 'Area In',
            data: data.area_in
          },
          {
            name: 'Area Out',
            data: data.area_out
          }
        ];
      }).catch(error => {
        console.error('Error fetching population data:', error);
      });
    }
  }
};
</script>
<style scoped>
.layout {
  width: 100%;
  height: 100%;

  display: grid;
  grid:
    'd1 d2' 1fr
    'd3 d4' 1fr
    'd5 d6' 1fr
    'd7 d8' 1fr
    / 1fr 1fr;
  gap: 3px;
}
.layout2{
  width: 100%;
  height: 100%;

  display: grid;
  grid:
    'f1' 1fr
    / 1fr;
  gap: 3px;
}

.f1{
  grid-area: f1;
}

.d1 {
  grid-area: d1;
}
.d2 {
  grid-area: d2;
}
.d3 {
  grid-area: d3;
}
.d4 {
  grid-area: d4;
}
.d5 {
  grid-area: d5;
}
.d6 {
  grid-area: d6;
}
.d7 {
  grid-area: d7;
}
.d8 {
  grid-area: d8;
}
.d9 {
  grid-area: d9;
}
</style>