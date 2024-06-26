<template>
    <div id="chartPatientNationality"></div>
</template>

<script>
import ApexCharts from 'apexcharts';
import patientService from './service';

export default {
    name: 'PatientNationality',
    data() {
        return {
            chart: null,
            populationData: {
                thai: [],
                other: [],
            }
        };
    },
    mounted() {
        this.fetchPopulationData();
    },
    methods: {
        async fetchPopulationData() {
            try {
                const response = await patientService.getPopulationNationality();
                this.populationData = response.data;
                this.renderChart();
            } catch (error) {
                console.error('Error fetching population data', error);
            }
        },
        renderChart() {
            const options = {
                chart: {
                    type: 'bar',
                    stacked: true,
                },
                series: [{
                    name: 'Thai',
                    data: this.populationData.thai
                }, {
                    name: 'Other',
                    data: this.populationData.other
                }],
                xaxis: {
                    categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100+']
                },
                yaxis: {
                    title: {
                        text: 'Population Count'
                    }
                },
                legend: {
                    position: 'top'
                },
                tooltip: {
                    shared: true,
                    intersect: false
                }
            };

            if (this.chart) {
                this.chart.updateOptions(options);
            } else {
                this.chart = new ApexCharts(document.querySelector("#chartPatientNationality"), options);
                this.chart.render();
            }
        }
    }
};
</script>
