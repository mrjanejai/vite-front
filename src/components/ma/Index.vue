<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <router-link class="btn btn-sm btn-primary" to="/ma/create">แจ้งเหตุ</router-link>
        <hr />
        <div class="col-12"><input id="searchbar_toggle" type="checkbox" />
          <div id="searchbar" class="mb-4">
            <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
              <select id="search_col" @change="searchChange()" class="form-select form-select-sm">
                <option value="Ma.id" data-type="number">Ma Id</option>
                <option value="Ma.ma_topic">Ma Ma Topic</option>
                <option value="Ma.hw_id">Ma Hw Id</option>
                <option value="Ma.ma_detail">Ma Ma Detail</option>
                <option value="Ma.report_by">Ma Report By</option>
                <option value="Ma.report_date" data-type="datetime">Ma Report Date</option>
                <option value="Ma.resolve_date" data-type="datetime">Ma Resolve Date</option>
                <option value="Ma.resolve_detail">Ma Resolve Detail</option>
                <option value="Ma.file_attch">Ma File Attch</option>
                <option value="Ma.start_job_date" data-type="datetime">Ma Start Job Date</option>
                <option value="MaType.sla_name">Ma Type Sla Name</option>
                <option value="MaDepartment.department">Ma Department Department</option>
                <option value="MaStatusType.status_name">Ma Status Type Status Name</option>
                <option value="MaProvider.provider_name">Ma Provider Provider Name</option>
              </select>
            </div>
            <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
              <select id="search_oper" class="form-select form-select-sm">
                <option value="c">Contains</option>
                <option value="e">Equals</option>
                <option value="g">&gt;</option>
                <option value="ge">&gt;&#x3D;</option>
                <option value="l">&lt;</option>
                <option value="le">&lt;&#x3D;</option>
              </select>
            </div>
            <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
              <input id="search_word" autocomplete="off" @keyup="search($event)" class="form-control form-control-sm" />
            </div>
            <div class="col">
              <button class="btn btn-primary btn-sm" @click="search()">Search</button>
              <button class="btn btn-secondary btn-sm" @click="clearSearch()">Clear</button>
            </div>
          </div>
          <table>
            <thead>
              <tr class="text-center">
                <th :class="getSortClass('Ma.id','asc')">
                  <router-link :to="getLink('sort','Ma.id','asc')">Id</router-link>
                </th>
                <th :class="getSortClass('Ma.ma_topic')">
                  <router-link :to="getLink('sort','Ma.ma_topic')">Ma Topic</router-link>
                </th>
                <th :class="getSortClass('Ma.hw_id') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.hw_id')">Hw Id</router-link>
                </th>
                <th :class="getSortClass('Ma.ma_detail') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.ma_detail')">Ma Detail</router-link>
                </th>
                <th :class="getSortClass('Ma.report_by') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.report_by')">Report By</router-link>
                </th>
                <th :class="getSortClass('Ma.report_date') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.report_date')">Report Date</router-link>
                </th>
                <th :class="getSortClass('Ma.resolve_date') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.resolve_date')">Resolve Date</router-link>
                </th>
                <th :class="getSortClass('Ma.resolve_detail') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.resolve_detail')">Resolve Detail</router-link>
                </th>
                <th :class="getSortClass('Ma.file_attch') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.file_attch')">File Attch</router-link>
                </th>
                <th :class="getSortClass('Ma.start_job_date') + ' d-none d-md-table-cell'">
                  <router-link :to="getLink('sort','Ma.start_job_date')">Start Job Date</router-link>
                </th>
                <th :class="getSortClass('MaType.sla_name')">
                  <router-link :to="getLink('sort','MaType.sla_name')">Ma Type Sla Name</router-link>
                </th>
                <th :class="getSortClass('MaDepartment.department')">
                  <router-link :to="getLink('sort','MaDepartment.department')">Ma Department Department</router-link>
                </th>
                <th :class="getSortClass('MaStatusType.status_name')">
                  <router-link :to="getLink('sort','MaStatusType.status_name')">Ma Status Type Status Name</router-link>
                </th>
                <th :class="getSortClass('MaProvider.provider_name')">
                  <router-link :to="getLink('sort','MaProvider.provider_name')">Ma Provider Provider Name</router-link>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ma in mas" :key="ma" :class="getRowClass(ma.ma_status_type_id)">
                <td class="text-center">{{ma.id}}</td>
                <td>{{ma.ma_topic}}</td>
                <td class="d-none d-md-table-cell">{{ma.hw_id}}</td>
                <td class="d-none d-md-table-cell">{{ma.ma_detail}}</td>
                <td class="d-none d-md-table-cell">{{ma.report_by}}</td>
                <td class="d-none d-md-table-cell text-center">{{ma.report_date}}</td>
                <td class="d-none d-md-table-cell text-center">{{ma.resolve_date}}</td>
                <td class="d-none d-md-table-cell">{{ma.resolve_detail}}</td>
                <td class="d-none d-md-table-cell">{{ma.file_attch}}</td>
                <td class="d-none d-md-table-cell text-center">{{ma.start_job_date}}</td>
                <td>{{ma.ma_type_sla_name}}</td>
                <td>{{ma.ma_department_department}}</td>
                <td>{{ma.ma_status_type_status_name}}</td>
                <td>{{ma.ma_provider_provider_name}}</td>
                <td class="text-center">
                  <router-link class="btn btn-sm btn-secondary" :to="`/ma/${ma.id}`" title="View"><i class="fa fa-eye"></i></router-link>
                  <router-link class="btn btn-sm btn-primary" :to="`/ma/edit/${ma.id}`" title="Edit"><i class="fa fa-pencil"></i></router-link>
                  <router-link class="btn btn-sm btn-danger" :to="`/ma/delete/${ma.id}`" title="Delete"><i class="fa fa-times"></i></router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row mb-1">
            <div class="col-md-3 col-6">
              <label>Show
                <select id="page_size" @change="$router.push($event.target.value)">
                  <option :value="getLink('size',10)" :selected="paging.size == 10">10</option>
                  <option :value="getLink('size',20)" :selected="paging.size == 20">20</option>
                  <option :value="getLink('size',30)" :selected="paging.size == 30">30</option>
                </select>
                entries
              </label>
            </div>
            <div class="col-md-9 col-6">
              <div class="float-right d-none d-md-block">
                <ul class="pagination flex-wrap">
                  <li :class="`page-item${paging.current <= 1 ? ' disabled' : ''}`">
                    <router-link class="page-link" :to="getLink('page',paging.current-1)">Prev</router-link>
                  </li>
                  <li v-for="page in paging.last" :key="page" :class="`page-item${paging.current == page ? ' active' : ''}`">
                    <router-link class="page-link" :to="getLink('page',page)">{{page}}</router-link>
                  </li>
                  <li :class="`page-item${paging.current >= paging.last ? ' disabled' : ''}`">
                    <router-link class="page-link" :to="getLink('page',paging.current+1)">Next</router-link>
                  </li>
                </ul>
              </div>
              <div class="float-right d-block d-md-none">
                <label> Page
                  <select id="page_index" @change="$router.push($event.target.value)">
                    <option v-for="page in paging.last" :key="page" :value="getLink('page',page)" :selected="paging.current == page">{{page}}</option>
                  </select>
                </label> of <span>{{paging.last}}</span>
                <div class="btn-group">
                  <router-link :class="` btn btn-primary btn-sm${paging.current <= 1 ? ' disabled' : ''}`" :to="getLink('page',paging.current-1)"><i class="fa fa-chevron-left"></i></router-link>
                  <router-link :class="` btn btn-primary btn-sm${paging.current >= paging.last ? ' disabled' : ''}`" :to="getLink('page',paging.current+1)"><i class="fa fa-chevron-right"></i></router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- <router-link class="btn btn-sm btn-primary" to="/ma/create">Create</router-link> -->
        </div>
        <component :is="'style'">#searchbar_toggle_menu { display: inline-flex!important }</component>
      </div>
    </div>
  </div>
</template>
<script>
import Service from './Service'
import Util from"../../util"

export default {
  name: 'MaIndex',
  data() {
    return {
      mas: [],
      paging: {}
    }
  },
  watch: {
    $route(to) {
    if (to.name == 'ma') {
      this.get()
    }
  }
  },
  mounted() {
    this.initView()
    this.get()
  },
  methods: {
    ...Util,
    get() {
        Service.get().then(response => {
            this.mas = response.data.mas
            this.paging = {
                current: parseInt(this.$route.query.page) || 1,
                size: parseInt(this.$route.query.size) || 10,
                last: response.data.last
            }
        }).catch((e) => {
            alert(e.response.data.message)
        });
      },
    getRowClass(statusTypeId) {
            switch (statusTypeId) {
                case 1:
                    return "bg-danger text-white"; // สีแดง
                case 2:
                    return "bg-warning text-dark"; // สีเหลือง
                case 3:
                    return "bg-success text-white"; // สีเขียว
                default:
                    return "bg-secondary text-white"; // สีเทา
            }
        },
  }
}
</script>
<style scoped>
.bg-danger {
    background-color: #dd8b93 !important;
    color: black !important;
}

.bg-warning {
    background-color: #e2c777 !important;
    color: black !important;
}

.bg-success {
    background-color: #65c07a !important;
    color: black !important;
}

.bg-secondary {
    background-color: #9ea2a7 !important;
    color: black !important;
}
</style>
