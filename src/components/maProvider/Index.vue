<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="col-12"><input id="searchbar_toggle" type="checkbox" />
          <div id="searchbar" class="mb-4">
            <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
              <select id="search_col" @change="searchChange()" class="form-select form-select-sm">
                <option value="MaProvider.id" data-type="number">Ma Provider Id</option>
                <option value="MaProvider.provider_name">Ma Provider Provider Name</option>
                <option value="MaProvider.active">Ma Provider Active</option>
                <option value="MaProvider.create_user" data-type="number">Ma Provider Create User</option>
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
          <table class="table table-sm table-striped table-hover">
            <thead>
              <tr>
                <th :class="getSortClass('MaProvider.id','asc')">
                  <router-link :to="getLink('sort','MaProvider.id','asc')">Id</router-link>
                </th>
                <th :class="getSortClass('MaProvider.provider_name')">
                  <router-link :to="getLink('sort','MaProvider.provider_name')">Provider Name</router-link>
                </th>
                <th :class="getSortClass('MaProvider.active')">
                  <router-link :to="getLink('sort','MaProvider.active')">Active</router-link>
                </th>
                <th :class="getSortClass('MaProvider.create_user')">
                  <router-link :to="getLink('sort','MaProvider.create_user')">Create User</router-link>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="maProvider in maProviders" :key="maProvider">
                <td class="text-center">{{maProvider.id}}</td>
                <td>{{maProvider.provider_name}}</td>
                <td>{{maProvider.active}}</td>
                <td class="text-end">{{maProvider.create_user}}</td>
                <td class="text-center">
                  <router-link class="btn btn-sm btn-secondary" :to="`/maProvider/${maProvider.id}`" title="View"><i class="fa fa-eye"></i></router-link>
                  <router-link class="btn btn-sm btn-primary" :to="`/maProvider/edit/${maProvider.id}`" title="Edit"><i class="fa fa-pencil"></i></router-link>
                  <router-link class="btn btn-sm btn-danger" :to="`/maProvider/delete/${maProvider.id}`" title="Delete"><i class="fa fa-times"></i></router-link>
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
          <router-link class="btn btn-sm btn-primary" to="/maProvider/create">Create</router-link>
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
  name: 'MaProviderIndex',
  data() {
    return {
      maProviders: [],
      paging: {}
    }
  },
  watch: {
    $route(to) {
    if (to.name == 'maProvider') {
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
        this.maProviders = response.data.maProviders
        this.paging = {
          current: parseInt(this.$route.query.page) || 1,
          size: parseInt(this.$route.query.size) || 10,
          last: response.data.last
        }
      }).catch((e) => {
        alert(e.response.data.message)
      })
    }
  }
}
</script>
