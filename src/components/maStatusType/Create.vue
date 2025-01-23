<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="create()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type_status_name">Status Name</label>
              <input id="ma_status_type_status_name" name="status_name" class="form-control form-control-sm" v-model="maStatusType.status_name" maxlength="50" />
              <span v-if="errors.status_name" class="text-danger">{{errors.status_name}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type_priority">Priority</label>
              <input id="ma_status_type_priority" name="priority" class="form-control form-control-sm" v-model="maStatusType.priority" maxlength="50" />
              <span v-if="errors.priority" class="text-danger">{{errors.priority}}</span>
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maStatusType')">Cancel</router-link>
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
  name: 'MaStatusTypeCreate',
  data() {
    return {
      maStatusType: {},
      errors: {}
    }
  },
  mounted() {
    this.initView(true)
  },
  methods: {
    ...Util,
    create() {
      Service.create(this.maStatusType).then(() => {
        this.$router.push(this.getRef('/maStatusType'))
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
