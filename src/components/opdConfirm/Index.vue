<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="col-12"><input id="searchbar_toggle" type="checkbox" />
                    <div id="searchbar" class="mb-4">
                        <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                            <label for="startDate">Start Date:</label>
                            <input type="date" v-model="startDate" class="form-control form-control-sm" />
                        </div>
                        <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                            <label for="endDate">End Date:</label>
                            <input type="date" v-model="endDate" class="form-control form-control-sm" />
                        </div>
                        <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                            <label for="search_col">Condition:</label>
                            <select id="search_col" @change="searchChange" class="form-select form-select-sm">
                                <option value="opdConfirm.confirm">confirm</option>
                                <option value="opdConfirm.hn">hn</option>
                                <option value="opdConfirm.nhso_fee_schedule_list_text">
                                    nhso_fee_schedule_list_text
                                </option>
                                <option value="opdConfirm.dxtext">dxtext</option>
                                <option value="opdConfirm.department">department</option>
                                <option value="opdConfirm.pttype_name">pttype_name</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                            <label for="search_oper">Operator:</label>
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
                            <label for="search_word">Typing:</label>
                            <input id="search_word" autocomplete="off" v-model="searchWord"
                                class="form-control form-control-sm" />
                        </div>
                        <div class="col">
                            <button class="btn btn-primary btn-sm" @click="search">
                                Search
                            </button>
                            <button class="btn btn-secondary btn-sm" @click="clearSearch">
                                Clear
                            </button>
                        </div>
                    </div>
                    <!-- <table class="table table-sm table-striped table-hover">
                    <thead>
                        <tr>
                            <th :class="getSortClass('opdConfirm.vn', 'asc')">
                                <router-link :to="getLink('sort', 'opdConfirm.vn', 'asc')">vn</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.hn', 'asc')">
                                <router-link :to="getLink('sort', 'opdConfirm.hn', 'asc')">hn</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.cid', 'asc')">
                                <router-link :to="getLink('sort', 'opdConfirm.cid', 'asc')">cid</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.ptname')">
                                <router-link :to="getLink('sort', 'opdConfirm.ptname')">ptname</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.vstdate')">
                                <router-link :to="getLink('sort', 'opdConfirm.vstdate')">vstdate</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.vsttime')">
                                <router-link :to="getLink('sort', 'opdConfirm.vsttime')">vsttime</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.department')">
                                <router-link :to="getLink('sort', 'opdConfirm.department')">department</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.pttype_name')">
                                <router-link :to="getLink('sort', 'opdConfirm.pttype_name')">pttype_name</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.dxtext')">
                                <router-link :to="getLink('sort', 'opdConfirm.dxtext')">dxtext</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.doctor_dxtext') + ' d-none d-md-table-cell'">
                                <router-link :to="getLink('sort', 'opdConfirm.doctor_dxtext')">doctor_dxtext</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.pdx')">
                                <router-link :to="getLink('sort', 'opdConfirm.pdx')">pdx</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.dx2')">
                                <router-link :to="getLink('sort', 'opdConfirm.dx2')">dx2</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.dx3')">
                                <router-link :to="getLink('sort', 'opdConfirm.dx3')">dx3</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.dx4')">
                                <router-link :to="getLink('sort', 'opdConfirm.dx4')">dx4</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.dx5')">
                                <router-link :to="getLink('sort', 'opdConfirm.dx5')">dx5</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.nhso_fee_schedule_list_text')">
                                <router-link :to="getLink('sort', 'opdConfirm.nhso_fee_schedule_list_text')">nhso_fee_schedule_list_text</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.confirm')">
                                <router-link :to="getLink('sort', 'opdConfirm.confirm')">confirm</router-link>
                            </th>
                            <th :class="getSortClass('opdConfirm.confirm_staff')">
                                <router-link :to="getLink('sort', 'opdConfirm.confirm_staff')">confirm_staff</router-link>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="opdConfirm in opdConfirms" :key="opdConfirm.vn">
                            <td>{{ opdConfirm.vn }}</td>
                            <td>{{ opdConfirm.hn }}</td>
                            <td>{{ opdConfirm.cid }}</td>
                            <td>{{ opdConfirm.ptname }}</td>
                            <td>{{ opdConfirm.vstdate }}</td>
                            <td>{{ opdConfirm.vsttime }}</td>
                            <td>{{ opdConfirm.department }}</td>
                            <td>{{ opdConfirm.pttype_name }}</td>
                            <td>{{ opdConfirm.dxtext }}</td>
                            <td>{{ opdConfirm.doctor_dxtext }}</td>
                            <td>{{ opdConfirm.pdx }}</td>
                            <td>{{ opdConfirm.dx2 }}</td>
                            <td>{{ opdConfirm.dx3 }}</td>
                            <td>{{ opdConfirm.dx4 }}</td>
                            <td>{{ opdConfirm.dx5 }}</td>
                            <td>{{ opdConfirm.nhso_fee_schedule_list_text }}</td>
                            <td>{{ opdConfirm.confirm }}</td>
                            <td>{{ opdConfirm.confirm_staff }}</td>
                            <td class="text-center">
                                <router-link class="btn btn-sm btn-primary" :to="`/hosxpOfficer/edit/${opdConfirm.vn}`">
                                    <i class="fa fa-pencil"></i> Edit
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table> -->
                    <!-- try to use q-table with pagination example: <<,<,1,2,3,4,5,...,>,>> -->
                    <q-table :rows="opdConfirms" :columns="columns" row-key="vn" v-model:pagination="paging"
                        :filter="filter" :sorting="sorting" :rows-per-page-options="[10, 20, 30, 50, 100]"
                        :hide-bottom="true"></q-table>

                    <!--<div class="row mb-1">
                        <div class="col-md-3 col-6">
                            <label>Show
                                <select id="page_size" @change="$router.push($event.target.value)">
                                    <option :value="getLink('size', 10)" :selected="paging.size == 10">10</option>
                                    <option :value="getLink('size', 20)" :selected="paging.size == 20">20</option>
                                    <option :value="getLink('size', 30)" :selected="paging.size == 30">30</option>
                                    <option :value="getLink('size', 100)" :selected="paging.size == 100">100</option>
                                    <option :value="getLink('size', 500)" :selected="paging.size == 500">500</option>
                                    <option :value="getLink('size', 1000)" :selected="paging.size == 1000">1000</option>
                                </select>
                                entries
                            </label>
                        </div>
                        <div class="col-md-9 col-6">
                             <div class="float-right d-none d-md-block">
                            <ul class="pagination flex-wrap">
                                <li :class="`page-item${paging.current <= 1 ? ' disabled' : ''}`">
                                    <router-link class="page-link" :to="getLink('page', paging.current - 1)">Prev</router-link>
                                </li>
                                <li v-for="page in paging.last" :key="page" :class="`page-item${paging.current == page ? ' active' : ''}`">
                                    <router-link class="page-link" :to="getLink('page', page)">{{ page
                                            }}</router-link>
                                </li>
                                <li :class="`page-item${paging.current >= paging.last ? ' disabled' : ''}`">
                                    <router-link class="page-link" :to="getLink('page', paging.current + 1)">Next</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="float-right d-block d-md-none">
                            <label> Page
                                <select id="page_index" @change="$router.push($event.target.value)">
                                    <option v-for="page in paging.last" :key="page" :value="getLink('page', page)" :selected="paging.current == page">{{ page }}</option>
                                </select>
                            </label> of <span>{{ paging.last }}</span>
                            <div class="btn-group">
                                <router-link :class="` btn btn-primary btn-sm${paging.current <= 1 ? ' disabled' : ''}`" :to="getLink('page', paging.current - 1)"><i class="fa fa-chevron-left"></i></router-link>
                                <router-link :class="` btn btn-primary btn-sm${paging.current >= paging.last ? ' disabled' : ''}`" :to="getLink('page', paging.current + 1)"><i class="fa fa-chevron-right"></i></router-link>
                            </div>
                        </div> -->

                    <!-- <div class="q-pa-lg flex flex-center">
                                <q-pagination v-model="paging.current" :max="10" input></q-pagination>
                            </div> 

                        </div>
                    </div>-->
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
    name: 'OPDConfirmIndex',
    data() {
        return {
            opdConfirms: [], // Store officer data here
            paging: {

            }
        }
    },
    watch: {
        $route(to) {
            console.log(to.name);
            if (to.name == 'opdConfirm') {
                this.get()
            }
        },
        "paging.current"(newPage) {
            this.get();
        },
    },
    mounted() {
        this.initView()
        this.get()
    },
    methods: {
        ...Util,
        get() {
            Service.get().then(response => {
                this.opdConfirms = response.data.opdConfirms
                this.paging = {
                    current: response.data.pagination.currentPage,
                    size: response.data.pagination.pageSize,
                    last: response.data.pagination.lastPage,
                    rows: response.data.pagination.totalRecords
                }
            }).catch((e) => {
                alert(e.response.data.message)
            })
        }
    }
}
</script>
