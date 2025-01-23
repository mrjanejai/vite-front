<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="edit()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_provider_id">Id</label>
              <input readonly id="ma_provider_id" name="id" class="form-control form-control-sm" v-model="maProvider.id" type="number" required />
              <span v-if="errors.id" class="text-danger">{{errors.id}}</span>
            </div>
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
  name: 'MaProviderEdit',
  data() {
    return {
      maProvider: {},
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
        this.maProvider = response.data.maProvider
      }).catch(e => {
        alert(e.response.data.message)
      })
    },
    edit() {
      Service.edit(this.$route.params.id, this.maProvider).then(() => {
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
