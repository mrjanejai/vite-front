<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="create()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_provider_provider_name">Provider Name</label>
              <input id="ma_provider_provider_name" name="provider_name" class="form-control form-control-sm" v-model="maProvider.provider_name" maxlength="50" />
              <span v-if="errors.provider_name" class="text-danger">{{errors.provider_name}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_provider_active">Active</label>
              <input id="ma_provider_active" name="active" class="form-control form-control-sm" v-model="maProvider.active" maxlength="50" />
              <span v-if="errors.active" class="text-danger">{{errors.active}}</span>
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maProvider')">Cancel</router-link>
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
  name: 'MaProviderCreate',
  data() {
    return {
      maProvider: {},
      errors: {}
    }
  },
  mounted() {
    this.initView(true)
  },
  methods: {
    ...Util,
    create() {
      Service.create(this.maProvider).then(() => {
        this.$router.push(this.getRef('/maProvider'))
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
