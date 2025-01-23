<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form method="post" @submit.prevent="edit()">
          <div class="row">
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_id">Id</label>
              <input readonly id="ma_id" name="id" class="form-control form-control-sm" v-model="ma.id" type="number" required />
              <span v-if="errors.id" class="text-danger">{{errors.id}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_ma_topic">Ma Topic</label>
              <input id="ma_ma_topic" name="ma_topic" class="form-control form-control-sm" v-model="ma.ma_topic" maxlength="50" />
              <span v-if="errors.ma_topic" class="text-danger">{{errors.ma_topic}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_ma_type">Ma Type</label>
              <select id="ma_ma_type" name="ma_type" class="form-select form-select-sm" v-model="ma.ma_type">
                <option></option>
                <option v-for="maType in maTypes" :key="maType" :value="maType.id" :selected="ma.ma_type == maType.id">{{maType.sla_name}}</option>
              </select>
              <span v-if="errors.ma_type" class="text-danger">{{errors.ma_type}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_hw_id">Hw Id</label>
              <input id="ma_hw_id" name="hw_id" class="form-control form-control-sm" v-model="ma.hw_id" maxlength="50" />
              <span v-if="errors.hw_id" class="text-danger">{{errors.hw_id}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_ma_detail">Ma Detail</label>
              <input id="ma_ma_detail" name="ma_detail" class="form-control form-control-sm" v-model="ma.ma_detail" maxlength="500" />
              <span v-if="errors.ma_detail" class="text-danger">{{errors.ma_detail}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_report_by">Report By</label>
              <input id="ma_report_by" name="report_by" class="form-control form-control-sm" v-model="ma.report_by" maxlength="50" />
              <span v-if="errors.report_by" class="text-danger">{{errors.report_by}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_department">Department</label>
              <select id="ma_department" name="department" class="form-select form-select-sm" v-model="ma.department">
                <option></option>
                <option v-for="maDepartment in maDepartments" :key="maDepartment" :value="maDepartment.id" :selected="ma.department == maDepartment.id">{{maDepartment.department}}</option>
              </select>
              <span v-if="errors.department" class="text-danger">{{errors.department}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_report_date">Report Date</label>
              <input id="ma_report_date" name="report_date" class="form-control form-control-sm" v-model="ma.report_date" data-type="datetime" autocomplete="off" />
              <span v-if="errors.report_date" class="text-danger">{{errors.report_date}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_status_type">Status Type</label>
              <select id="ma_status_type" name="status_type" class="form-select form-select-sm" v-model="ma.status_type">
                <option></option>
                <option v-for="maStatusType in maStatusTypes" :key="maStatusType" :value="maStatusType.id" :selected="ma.status_type == maStatusType.id">{{maStatusType.status_name}}</option>
              </select>
              <span v-if="errors.status_type" class="text-danger">{{errors.status_type}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_resolve_by">Resolve By</label>
              <select id="ma_resolve_by" name="resolve_by" class="form-select form-select-sm" v-model="ma.resolve_by">
                <option></option>
                <option v-for="maProvider in maProviders" :key="maProvider" :value="maProvider.id" :selected="ma.resolve_by == maProvider.id">{{maProvider.provider_name}}</option>
              </select>
              <span v-if="errors.resolve_by" class="text-danger">{{errors.resolve_by}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_resolve_date">Resolve Date</label>
              <input id="ma_resolve_date" name="resolve_date" class="form-control form-control-sm" v-model="ma.resolve_date" data-type="datetime" autocomplete="off" />
              <span v-if="errors.resolve_date" class="text-danger">{{errors.resolve_date}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_resolve_detail">Resolve Detail</label>
              <input id="ma_resolve_detail" name="resolve_detail" class="form-control form-control-sm" v-model="ma.resolve_detail" maxlength="500" />
              <span v-if="errors.resolve_detail" class="text-danger">{{errors.resolve_detail}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_file_attch">File Attch</label>
              <input id="ma_file_attch" name="file_attch" class="form-control form-control-sm" v-model="ma.file_attch" maxlength="50" />
              <span v-if="errors.file_attch" class="text-danger">{{errors.file_attch}}</span>
            </div>
            <div class="mb-3 col-md-6 col-lg-4">
              <label class="form-label" for="ma_start_job_date">Start Job Date</label>
              <input id="ma_start_job_date" name="start_job_date" class="form-control form-control-sm" v-model="ma.start_job_date" data-type="datetime" autocomplete="off" />
              <span v-if="errors.start_job_date" class="text-danger">{{errors.start_job_date}}</span>
            </div>
            <div class="col-12">
              <router-link class="btn btn-sm btn-secondary" :to="getRef('/ma')">Cancel</router-link>
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
  name: 'MaEdit',
  data() {
    return {
      ma: {},
      maTypes: [],
      maDepartments: [],
      maStatusTypes: [],
      maProviders: [],
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
        this.ma = response.data.ma
        this.maTypes = response.data.maTypes
        this.maDepartments = response.data.maDepartments
        this.maStatusTypes = response.data.maStatusTypes
        this.maProviders = response.data.maProviders
      }).catch(e => {
        alert(e.response.data.message)
      })
    },
    edit() {
      Service.edit(this.$route.params.id, this.ma).then(() => {
        this.$router.push(this.getRef('/ma'))
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
