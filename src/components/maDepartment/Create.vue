<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="create()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_department_department">Department</label>
              <input id="ma_department_department" name="department" class="form-control form-control-sm" v-model="maDepartment.department" maxlength="50" />
              <span v-if="errors.department" class="text-danger">{{errors.department}}</span>
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maDepartment')">Cancel</router-link>
              <button class="btn btn-sm btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Service from './Service'
import Util from"../../util"

export default {
  name: 'MaDepartmentCreate',
  data() {
    return {
      maDepartment: {},
      errors: {}
    }
  },
  mounted() {
    this.initView(true)
  },
  methods: {
    ...Util,
    create() {
      Service.create(this.maDepartment).then(() => {
        this.$router.push(this.getRef('/maDepartment'))
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
