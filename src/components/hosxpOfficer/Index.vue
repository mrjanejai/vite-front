<!-- components/HosxpOfficer/index.vue -->
<template>
    <div class="container">
        <h2>Hosxp Officers</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Login Name</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="officer in officers" :key="officer.officer_id">
                    <td>{{ officer.officer_id }}</td>
                    <td>{{ officer.officer_login_name }}</td>
                    <td>{{ officer.officer_name }}</td>
                    <td>
                        <router-link :to="`/hosxpOfficer/${officer.officer_id}`"
                            class="btn btn-info btn-sm">View</router-link>
                        <router-link :to="`/hosxpOfficer/${officer.officer_id}/edit`"
                            class="btn btn-primary btn-sm">Edit</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination :current="paging.current" :last="paging.last" @change="fetchOfficers" />
    </div>
</template>

<script>
import Service from './service';

export default {
    name: 'HosxpOfficerIndex',
    data() {
        return {
            officers: [],
            paging: { current: 1, last: 1 }
        };
    },
    mounted() {
        this.fetchOfficers();
    },
    methods: {
        fetchOfficers(page = 1) {
            const params = { page, size: 10 };
            Service.getOfficers(params)
                .then(response => {
                    this.officers = response.data.officers;
                    this.paging = {
                        current: page,
                        last: response.data.last
                    };
                })
                .catch(error => {
                    console.error('Error fetching officers:', error);
                    alert('Error fetching officers');
                });
        }
    }
};
</script>
