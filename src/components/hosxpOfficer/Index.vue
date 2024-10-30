<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="col-12"><input id="searchbar_toggle" type="checkbox" />
                    <!-- <div id="searchbar" class="mb-4">
                        <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                            <select id="search_col" @change="searchChange()" class="form-select form-select-sm">
                                <option value="officer.officer_id" data-type="number">officer_id</option>
                                <option value="officer.officer_name">officer_name</option>
                                <option value="officer.officer_login_name">officer_login_name</option>
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
                            <input id="search_word" autocomplete="off" @keyup="search($event)"
                                class="form-control form-control-sm" />
                        </div>
                        <div class="col">
                            <button class="btn btn-primary btn-sm" @click="search()">Search</button>
                            <button class="btn btn-secondary btn-sm" @click="clearSearch()">Clear</button>
                        </div>
                    </div> -->
                    <table class="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th :class="getSortClass('officer.officer_id', 'asc')">
                                    <router-link
                                        :to="getLink('sort', 'officer.officer_id', 'asc')">officer_id</router-link>
                                </th>
                                <th :class="getSortClass('officer.officer_name')">
                                    <router-link
                                        :to="getLink('sort', 'officer.officer_name')">officer_name</router-link>
                                </th>
                                <th :class="getSortClass('officer.officer_login_name') + ' d-none d-md-table-cell'">
                                    <router-link
                                        :to="getLink('sort', 'officer.officer_login_name')">officer_login_name</router-link>
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="officer in hosxpOfficers" :key="officer.officer_id">
                                <td class="text-center">{{ officer.officer_id }}</td>
                                <td>{{ officer.officer_name }}</td>
                                <td class="d-none d-md-table-cell">{{ officer.officer_login_name }}</td>
                                <td class="text-center">
                                    <!-- ปรับปุ่ม Edit ให้ส่ง officer_id ไปยังหน้าที่มี Edit.vue -->
                                    <router-link class="btn btn-sm btn-primary"
                                        :to="`/hosxpOfficer/edit/${officer.officer_id}`">
                                        <i class="fa fa-pencil"></i> Edit
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row mb-1">
                        <div class="col-md-3 col-6">
                            <label>Show
                                <select id="page_size" @change="$router.push($event.target.value)">
                                    <option :value="getLink('size', 10)" :selected="paging.size == 10">10</option>
                                    <option :value="getLink('size', 20)" :selected="paging.size == 20">20</option>
                                    <option :value="getLink('size', 30)" :selected="paging.size == 30">30</option>
                                    <option :value="getLink('size', 100)" :selected="paging.size == 100">100</option>
                                </select>
                                entries
                            </label>
                        </div>
                        <div class="col-md-9 col-6">
                            <div class="float-right d-none d-md-block">
                                <ul class="pagination flex-wrap">
                                    <li :class="`page-item${paging.current <= 1 ? ' disabled' : ''}`">
                                        <router-link class="page-link"
                                            :to="getLink('page', paging.current - 1)">Prev</router-link>
                                    </li>
                                    <li v-for="page in paging.last" :key="page"
                                        :class="`page-item${paging.current == page ? ' active' : ''}`">
                                        <router-link class="page-link" :to="getLink('page', page)">{{ page
                                            }}</router-link>
                                    </li>
                                    <li :class="`page-item${paging.current >= paging.last ? ' disabled' : ''}`">
                                        <router-link class="page-link"
                                            :to="getLink('page', paging.current + 1)">Next</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="float-right d-block d-md-none">
                                <label> Page
                                    <select id="page_index" @change="$router.push($event.target.value)">
                                        <option v-for="page in paging.last" :key="page" :value="getLink('page', page)"
                                            :selected="paging.current == page">{{ page }}</option>
                                    </select>
                                </label> of <span>{{ paging.last }}</span>
                                <div class="btn-group">
                                    <router-link
                                        :class="` btn btn-primary btn-sm${paging.current <= 1 ? ' disabled' : ''}`"
                                        :to="getLink('page', paging.current - 1)"><i
                                            class="fa fa-chevron-left"></i></router-link>
                                    <router-link
                                        :class="` btn btn-primary btn-sm${paging.current >= paging.last ? ' disabled' : ''}`"
                                        :to="getLink('page', paging.current + 1)"><i
                                            class="fa fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <component :is="'style'">#searchbar_toggle_menu { display: inline-flex!important }</component>
            </div>
        </div>
    </div>
</template>

<script>
import Service from './service'
import Util from "../../util"

export default {
    name: 'HosxpOfficerIndex',
    data() {
        return {
            hosxpOfficers: [], // Store officer data here
            paging: {}
        }
    },
    watch: {
        $route(to) {
            console.log(to.name);
            if (to.name == 'hosxpOfficer') {
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
                this.hosxpOfficers = response.data.officers
                this.paging = {
                    current: response.data.pagination.currentPage,
                    size: response.data.pagination.pageSize,
                    last: response.data.pagination.lastPage
                }
            }).catch((e) => {
                alert(e.response.data.message)
            })
        }
    }
}
</script>
