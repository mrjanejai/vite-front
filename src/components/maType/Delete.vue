<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="this.delete()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_type_id">Id</label>
              <input readonly id="ma_type_id" name="id" class="form-control form-control-sm" :value="maType.id" type="number" required />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_type_sla_name">Sla Name</label>
              <input readonly id="ma_type_sla_name" name="sla_name" class="form-control form-control-sm" :value="maType.sla_name" maxlength="50" />
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maType')">Cancel</router-link>
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
  name: 'MaTypeDelete',
  data() {
    return {
      maType: {}
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
        this.maType = response.data.maType
      }).catch(e => {
        alert(e.response.data.message)
      })
    },
    delete() {
      Service.delete(this.$route.params.id, this.maType).then(() => {
        this.$router.push(this.getRef('/maType'))
      }).catch((e) => {
        alert(e.response.data.message)
      })
    }
  }
}
</script>
