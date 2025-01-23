<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="edit()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type_id">Id</label>
              <input readonly id="ma_status_type_id" name="id" class="form-control form-control-sm" v-model="maStatusType.id" type="number" required />
              <span v-if="errors.id" class="text-danger">{{errors.id}}</span>
            </div>
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
  name: 'MaStatusTypeEdit',
  data() {
    return {
      maStatusType: {},
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
        this.maStatusType = response.data.maStatusType
      }).catch(e => {
        alert(e.response.data.message)
      })
    },
    edit() {
      Service.edit(this.$route.params.id, this.maStatusType).then(() => {
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
