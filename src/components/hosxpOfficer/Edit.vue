<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form method="post" @submit.prevent="edit()">
                    <div class="row">
                        <div class="mb-3 col-md-6 col-lg-4">
                            <label class="form-label" for="officer_id">officer_id</label>
                            <input readonly id="officer_id" name="officer_id" class="form-control form-control-sm"
                                v-model="officer.officer_id" type="number" required />
                            <span v-if="errors.officer_id" class="text-danger">{{ errors.officer_id }}</span>
                        </div>
                        <div class="mb-3 col-md-6 col-lg-4">
                            <label class="form-label" for="officer_name">officer_name</label>
                            <input readonly id="officer_name" name="officer_name" class="form-control form-control-sm"
                                v-model="officer.officer_name" required maxlength="50" />
                            <span v-if="errors.officer_name" class="text-danger">{{ errors.officer_name }}</span>
                        </div>
                        <div class="mb-3 col-md-6 col-lg-4">
                            <label class="form-label" for="officer_login_name">officer_login_name</label>
                            <input readonly id="officer_login_name" name="email" class="form-control form-control-sm"
                                v-model="officer.officer_login_name" required maxlength="50" />
                            <span v-if="errors.officer_login_name" class="text-danger">{{ errors.officer_login_name
                                }}</span>
                        </div>
                        <div class="col-12">
                            <h6>
                            </h6><label class="form-label">Roles</label>
                            <div v-for="role in roles" :key="role" class="form-check">
                                <input :id="`user_role_role_id${role.id}`" name="role_id" class="form-check-input"
                                    type="checkbox" :value="role.id"
                                    :checked="officerUserRoles.some(e => e.role_id == role.id)" />
                                <label class="form-check-label" :for="`user_role_role_id${role.id}`">{{ role.name
                                    }}</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <router-link class="btn btn-sm btn-secondary"
                                :to="getRef('/hosxpOfficer')">Cancel</router-link>
                            <button class="btn btn-sm btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Service from './service'
import Util from "../../util"
console.log('im edit page');
export default {
    name: 'HosxpOfficerEdit',
    data() {
        return {
            officer: {},
            officerUserRoles: [],
            roles: [],
            errors: {}
        }
    },
    mounted() {
        this.get().finally(() => {
            this.initView(true)
        })
    },
    methods: {
        ...Util,
        get() {
            return Service.edit(this.$route.params.id).then(response => {
                this.officer = response.data.officer
                this.officerUserRoles = response.data.officerUserRoles
                this.roles = response.data.roles
            })
        },
        edit() {
            console.log('im in edit hosxpofficer role')
            if (!this.validateForm()) {
                return
            }
            this.officer.officer_id = Array.from(document.querySelectorAll('[name="role_id"]:checked')).map(e => e.value)
            Service.edit(this.$route.params.id, this.officer).then(() => {
                this.$router.push(this.getRef('/hosxpOfficer'))
            }).catch((e) => {
                if (e.response.data.errors) {
                    this.errors = e.response.data.errors
                }
                else {
                    alert(e.response.data.message)
                }
            })
        }
    }
}
</script>
