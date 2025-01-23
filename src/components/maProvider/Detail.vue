<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_provider_id">Id</label>
              <input readonly id="ma_provider_id" name="id" class="form-control form-control-sm" :value="maProvider.id" type="number" required />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_provider_provider_name">Provider Name</label>
              <input readonly id="ma_provider_provider_name" name="provider_name" class="form-control form-control-sm" :value="maProvider.provider_name" maxlength="50" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_provider_active">Active</label>
              <input readonly id="ma_provider_active" name="active" class="form-control form-control-sm" :value="maProvider.active" maxlength="50" />
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maProvider')">Back</router-link>
              <router-link class="btn btn-sm btn-primary" :to="`/maProvider/edit/${maProvider.id}?ref=${encodeURIComponent(getRef('/maProvider'))}`">Edit</router-link>
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
  name: 'MaProviderDetail',
  data() {
    return {
      maProvider: {}
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
      return Service.get(this.$route.params.id).then(response => {
        this.maProvider = response.data.maProvider
      }).catch(e => {
        alert(e.response.data.message)
      })
    }
  }
}
</script>
