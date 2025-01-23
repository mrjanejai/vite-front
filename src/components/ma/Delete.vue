<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="this.delete()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_id">Id</label>
              <input readonly id="ma_id" name="id" class="form-control form-control-sm" :value="ma.id" type="number" required />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_ma_topic">Ma Topic</label>
              <input readonly id="ma_ma_topic" name="ma_topic" class="form-control form-control-sm" :value="ma.ma_topic" maxlength="50" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_ma_type">Ma Type</label>
              <input readonly id="ma_ma_type" name="ma_type" class="form-control form-control-sm" :value="ma.ma_type" type="number" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_hw_id">Hw Id</label>
              <input readonly id="ma_hw_id" name="hw_id" class="form-control form-control-sm" :value="ma.hw_id" maxlength="50" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_ma_detail">Ma Detail</label>
              <input readonly id="ma_ma_detail" name="ma_detail" class="form-control form-control-sm" :value="ma.ma_detail" maxlength="500" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_report_by">Report By</label>
              <input readonly id="ma_report_by" name="report_by" class="form-control form-control-sm" :value="ma.report_by" maxlength="50" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_department">Department</label>
              <input readonly id="ma_department" name="department" class="form-control form-control-sm" :value="ma.department" type="number" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_report_date">Report Date</label>
              <input readonly id="ma_report_date" name="report_date" class="form-control form-control-sm" :value="ma.report_date" data-type="datetime" autocomplete="off" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type">Status Type</label>
              <input readonly id="ma_status_type" name="status_type" class="form-control form-control-sm" :value="ma.status_type" type="number" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_resolve_by">Resolve By</label>
              <input readonly id="ma_resolve_by" name="resolve_by" class="form-control form-control-sm" :value="ma.resolve_by" type="number" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_resolve_date">Resolve Date</label>
              <input readonly id="ma_resolve_date" name="resolve_date" class="form-control form-control-sm" :value="ma.resolve_date" data-type="datetime" autocomplete="off" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_resolve_detail">Resolve Detail</label>
              <input readonly id="ma_resolve_detail" name="resolve_detail" class="form-control form-control-sm" :value="ma.resolve_detail" maxlength="500" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_file_attch">File Attch</label>
              <input readonly id="ma_file_attch" name="file_attch" class="form-control form-control-sm" :value="ma.file_attch" maxlength="50" />
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_start_job_date">Start Job Date</label>
              <input readonly id="ma_start_job_date" name="start_job_date" class="form-control form-control-sm" :value="ma.start_job_date" data-type="datetime" autocomplete="off" />
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/ma')">Cancel</router-link>
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
  name: 'MaDelete',
  data() {
    return {
      ma: {}
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
        this.ma = response.data.ma
      }).catch(e => {
        alert(e.response.data.message)
      })
    },
    delete() {
      Service.delete(this.$route.params.id, this.ma).then(() => {
        this.$router.push(this.getRef('/ma'))
      }).catch((e) => {
        alert(e.response.data.message)
      })
    }
  }
}
</script>
