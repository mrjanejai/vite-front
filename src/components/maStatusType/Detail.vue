<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type_id">Id</label>
              <input readonly id="ma_status_type_id" name="id" class="form-control form-control-sm" :value="maStatusType.id" type="number" required />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type_status_name">Status Name</label>
              <input readonly id="ma_status_type_status_name" name="status_name" class="form-control form-control-sm" :value="maStatusType.status_name" maxlength="50" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type_priority">Priority</label>
              <input readonly id="ma_status_type_priority" name="priority" class="form-control form-control-sm" :value="maStatusType.priority" maxlength="50" />
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/maStatusType')">Back</router-link>
              <router-link class="btn btn-sm btn-primary" :to="`/maStatusType/edit/${maStatusType.id}?ref=${encodeURIComponent(getRef('/maStatusType'))}`">Edit</router-link>
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
  name: 'MaStatusTypeDetail',
  data() {
    return {
      maStatusType: {}
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
        this.maStatusType = response.data.maStatusType
      }).catch(e => {
        alert(e.response.data.message)
      })
    }
  }
}
</script>
