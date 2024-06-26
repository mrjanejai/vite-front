<template>
    <div id="chartPatientStatus"></div>
</template>

<script>
import ApexCharts from 'apexcharts';
import patientService from './service';

export default {
    name: 'PatientStatus',
    data() {
        return {
            chart: null,
            populationData: {
                single: [],
                married: [],
                widow: [],
                divorced: [],
                separated: [],
                monk: [],
                unknown: []
            }
        };
    },
    mounted() {
        this.fetchPopulationData();
    },
    methods: {
        async fetchPopulationData() {
            try {
                const response = await patientService.getPopulationStatus();
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
                    name: 'Single',
                    data: this.populationData.single
                }, {
                    name: 'Married',
                    data: this.populationData.married
                }, {
                    name: 'Widow',
                    data: this.populationData.widow
                }, {
                    name: 'Divorced',
                    data: this.populationData.divorced
                }, {
                    name: 'Separated',
                    data: this.populationData.separated
                }, {
                    name: 'Monk',
                    data: this.populationData.monk
                }, {
                    name: 'Unknown',
                    data: this.populationData.unknown
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
                this.chart = new ApexCharts(document.querySelector("#chartPatientStatus"), options);
                this.chart.render();
            }
        }
    }
};
</script>
