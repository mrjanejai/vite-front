<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="this.delete()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_department_id">Id</label>
              <input readonly id="ma_department_id" name="id" class="form-control form-control-sm" :value="maDepartment.id" type="number" required />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_department_department">Department</label>
              <input readonly id="ma_department_department" name="department" class="form-control form-control-sm" :value="maDepartment.department" maxlength="50" />
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maDepartment')">Cancel</router-link>
              <button class="btn btn-sm btn-danger">Delete</button>
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
  name: 'MaDepartmentDelete',
  data() {
    return {
      maDepartment: {}
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
      return Service.delete(this.$route.params.id).then(response => {
        this.maDepartment = response.data.maDepartment
      }).catch(e => {
        alert(e.response.data.message)
      })
    },
    delete() {
      Service.delete(this.$route.params.id, this.maDepartment).then(() => {
        this.$router.push(this.getRef('/maDepartment'))
      }).catch((e) => {
        alert(e.response.data.message)
      })
    }
  }
}
</script>
