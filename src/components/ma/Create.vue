<template>
<div class="container">
    <div class="row">
        <div class="col">
            <form method="post" @submit.prevent="create()">
                <div class="row">
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_ma_topic">เรื่องที่แจ้ง</label>
                        <input id="ma_ma_topic" name="ma_topic" class="form-control form-control-sm" v-model="ma.ma_topic" maxlength="50" />
                        <span v-if="errors.ma_topic" class="text-danger">{{errors.ma_topic}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_ma_type">ประเภทการให้บริการ</label>
                        <select id="ma_ma_type" name="ma_type" class="form-select form-select-sm" v-model="ma.ma_type">
                            <option></option>
                            <option v-for="maType in maTypes" :key="maType" :value="maType.id" :selected="ma.ma_type == maType.id">{{maType.sla_name}}</option>
                        </select>
                        <span v-if="errors.ma_type" class="text-danger">{{errors.ma_type}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_hw_id">เลขครุภัณฑ์(ถ้ามี)</label>
                        <input id="ma_hw_id" name="hw_id" class="form-control form-control-sm" v-model="ma.hw_id" maxlength="50" />
                        <span v-if="errors.hw_id" class="text-danger">{{errors.hw_id}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_ma_detail">รายละเอียด</label>
                        <input id="ma_ma_detail" name="ma_detail" class="form-control form-control-sm" v-model="ma.ma_detail" maxlength="500" />
                        <span v-if="errors.ma_detail" class="text-danger">{{errors.ma_detail}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_report_by">แจ้งโดย</label>
                        <input id="ma_report_by" name="report_by" class="form-control form-control-sm" v-model="ma.report_by" maxlength="50" />
                        <span v-if="errors.report_by" class="text-danger">{{errors.report_by}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_department">จุดที่แจ้ง</label>
                        <select id="ma_department" name="department" class="form-select form-select-sm" v-model="ma.department">
                            <option></option>
                            <option v-for="maDepartment in maDepartments" :key="maDepartment" :value="maDepartment.id" :selected="ma.department == maDepartment.id">{{maDepartment.department}}</option>
                        </select>
                        <span v-if="errors.department" class="text-danger">{{errors.department}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_report_date">วันที่แจ้ง</label>
                        <input id="ma_report_date" name="report_date" class="form-control form-control-sm" v-model="ma.report_date" readonly />
                        <span v-if="errors.report_date" class="text-danger">{{ errors.report_date }}</span>
                    </div>

                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_status_type">สถานะการแจ้งเหตุ</label>
                        <select id="ma_status_type" name="status_type" class="form-select form-select-sm" v-model="ma.status_type" disabled>
                            <option v-for="maStatusType in maStatusTypes" :key="maStatusType" :value="maStatusType.id">
                                {{ maStatusType.status_name }}
                            </option>
                        </select>
                        <span v-if="errors.status_type" class="text-danger">{{ errors.status_type }}</span>
                    </div>

                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_resolve_by">ผู้รับแจ้ง</label>
                        <select id="ma_resolve_by" name="resolve_by" class="form-select form-select-sm" v-model="ma.resolve_by">
                            <option></option>
                            <option v-for="maProvider in maProviders" :key="maProvider" :value="maProvider.id" :selected="ma.resolve_by == maProvider.id">{{maProvider.provider_name}}</option>
                        </select>
                        <span v-if="errors.resolve_by" class="text-danger">{{errors.resolve_by}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_resolve_date">วันที่เสร็จสิ้น</label>
                        <input id="ma_resolve_date" name="resolve_date" class="form-control form-control-sm" v-model="ma.resolve_date" data-type="datetime" autocomplete="off" />
                        <span v-if="errors.resolve_date" class="text-danger">{{errors.resolve_date}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_resolve_detail">รายละเอียดการแก้ไข</label>
                        <input id="ma_resolve_detail" name="resolve_detail" class="form-control form-control-sm" v-model="ma.resolve_detail" maxlength="500" />
                        <span v-if="errors.resolve_detail" class="text-danger">{{errors.resolve_detail}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_file_attch">ไฟล์แนบ</label>
                        <input id="ma_file_attch" name="file_attch" class="form-control form-control-sm" v-model="ma.file_attch" maxlength="50" />
                        <span v-if="errors.file_attch" class="text-danger">{{errors.file_attch}}</span>
                    </div>
                    <div class="mb-3 col-md-6 col-lg-4">
                        <label class="form-label" for="ma_start_job_date">เวลาที่เริ่มรับงาน</label>
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
import Util from "../../util"

export default {
    name: 'MaCreate',
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
            if (this.maStatusTypes.length > 0) {
                this.ma.status_type = this.maStatusTypes[0].id; // กำหนดค่าเริ่มต้นเป็นค่าแรกสุด
            }
            this.ma.report_date = this.getCurrentDateTime(); // กำหนดค่า report_date
            this.initView(true)
        })
    },
    methods: {
        ...Util,
        get() {
            return Service.create().then(response => {
                this.maTypes = response.data.maTypes
                this.maDepartments = response.data.maDepartments
                this.maStatusTypes = response.data.maStatusTypes
                this.maProviders = response.data.maProviders
            }).catch(e => {
                alert(e.response.data.message)
            })
        },
        getCurrentDateTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // รูปแบบ YYYY-MM-DD HH:mm:ss
        },
      create() {
        // Reset errors
        this.errors = {};

        // Validation
        if (!this.ma.ma_topic) {
            this.errors.ma_topic = "กรุณากรอกเรื่องที่แจ้ง";
        }
        if (!this.ma.ma_detail) {
            this.errors.ma_detail = "กรุณากรอกรายละเอียด";
        }
        if (!this.ma.report_by) {
            this.errors.report_by = "กรุณากรอกชื่อผู้แจ้ง";
        }
        if (!this.ma.department) {
            this.errors.department = "กรุณาเลือกจุดที่แจ้ง";
        }

        // Check if there are errors
        if (Object.keys(this.errors).length > 0) {
            return; // Stop execution if there are validation errors
        }
        
            Service.create(this.ma).then(() => {
                this.$router.push(this.getRef('/ma'))
            }).catch((e) => {
                if (e.response.data.errors) {
                    this.errors = e.response.data.errors
                } else {
                    alert(e.response.data.message)
                }
            })
        }
    }
}
</script>
