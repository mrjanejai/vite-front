<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="create()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_type_sla_name">Sla Name</label>
              <input id="ma_type_sla_name" name="sla_name" class="form-control form-control-sm" v-model="maType.sla_name" maxlength="50" />
              <span v-if="errors.sla_name" class="text-danger">{{errors.sla_name}}</span>
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maType')">Cancel</router-link>
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
  name: 'MaTypeCreate',
  data() {
    return {
      maType: {},
      errors: {}
    }
  },
  mounted() {
    this.initView(true)
  },
  methods: {
    ...Util,
    create() {
      Service.create(this.maType).then(() => {
        this.$router.push(this.getRef('/maType'))
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
