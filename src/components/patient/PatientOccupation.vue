<template>
    <div id="chartPatientOccupation"></div>
</template>

<script>
import ApexCharts from 'apexcharts';
import patientService from './service';

export default {
    name: 'PatientOccupation',
    data() {
        return {
            chart: null,
            populationData: []
        };
    },
    async mounted() {
        const response = await patientService.getPopulationOcc();
        this.populationData = response.data;
        this.renderChart();
    },
    methods: {
        renderChart() {
            const seriesData = [];

            Object.keys(this.populationData).forEach(occupation => {
                const maleCount = this.populationData[occupation].male;
                const femaleCount = this.populationData[occupation].female;

                seriesData.push({
                    x: occupation,
                    y: maleCount,
                    gender: 'Male'
                });

                seriesData.push({
                    x: occupation,
                    y: femaleCount,
                    gender: 'Female'
                });
            });

            const options = {
                chart: {
                    type: 'treemap',
                    height: 'auto'
                },
                series: [{
                    data: seriesData
                }],
                title: {
                    text: 'Population by Occupation and Sex'
                },
                plotOptions: {
                    treemap: {
                        distributed: true,
                        enableShades: true
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
                            const gender = w.globals.seriesNames[seriesIndex];
                            return `${value} (${gender})`;
                        }
                    }
                }
            };

            if (this.chart) {
                this.chart.updateOptions(options);
            } else {
                this.chart = new ApexCharts(document.querySelector("#chartPatientOccupation"), options);
                this.chart.render();
            }
        }
    }
};
</script>

<style scoped>
#chart {
    max-width: 1200px;
    margin: 35px auto;
}
</style>
