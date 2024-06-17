<template>
  <div>
    <apexchart type="bar" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import Service from './service';

export default {
  components: {
    apexchart: VueApexCharts
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
          }
        ];
      }).catch(error => {
        console.error('Error fetching population data:', error);
      });
    }
  }
};
</script>
