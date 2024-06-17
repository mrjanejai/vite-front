<template>
  <div>
    <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import ApexCharts from 'vue3-apexcharts'

export default {
  name: 'PopulationPyramid',
  components: {
    apexchart: ApexCharts
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100+']
        }
      },
      series: [{
        name: 'Male',
        data: [ // ข้อมูลตัวอย่าง ให้แทนที่ด้วยข้อมูลจริงของคุณ
          44, 55, 41, 64, 22, 43, 21, 49, 61, 43, 26, 31, 47, 33, 43, 52, 13, 32, 26, 41, 19
        ]
      }, {
        name: 'Female',
        data: [ // ข้อมูลตัวอย่าง ให้แทนที่ด้วยข้อมูลจริงของคุณ
          53, 32, 33, 52, 13, 44, 32, 41, 53, 43, 26, 31, 47, 33, 43, 52, 13, 32, 26, 41, 19
        ]
      }]
    }
  }
}
</script>
