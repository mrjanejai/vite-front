<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form method="post" @submit.prevent="edit()">
                    <div class="row">
                        <div class="col-12">
                            <h6>
                            </h6><label class="form-label">Roles</label>
                            <div v-for="role in roles" :key="role" class="form-check">
                                <input :id="`user_role_role_id${role.id}`" name="role_id" class="form-check-input"
                                    type="checkbox" :value="role.id"
                                    :checked="userAccountUserRoles.some(e => e.role_id == role.id)" />
                                <label class="form-check-label"
                                    :for="`user_role_role_id${role.id}`">{{ role.name }}</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <router-link class="btn btn-sm btn-secondary"
                                :to="getRef('/userAccount')">Cancel</router-link>
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
console.log('hi');
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
            if (!this.validateForm()) {
                return
            }
            this.officer.role_id = Array.from(document.querySelectorAll('[name="role_id"]:checked')).map(e => e.value)
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
