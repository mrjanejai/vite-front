<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="col-12">
            <input id="searchbar_toggle" type="checkbox" />
            <div id="searchbar" class="mb-4">
              <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                <label for="startDate">Start Date:</label>
                <input
                  type="date"
                  v-model="startDate"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                <label for="endDate">End Date:</label>
                <input
                  type="date"
                  v-model="endDate"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="form-group col-lg-2 me-2 mb-lg-0 mb-3">
                <select
                  id="search_col"
                  @change="searchChange"
                  class="form-select form-select-sm"
                >
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
                <input
                  id="search_word"
                  autocomplete="off"
                  v-model="searchWord"
                  class="form-control form-control-sm"
                />
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
            <table class="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <th v-for="col in columns" :key="col.key">
                    <router-link
                      :to="getLink('sort', col.key, col.direction)"
                      >{{ col.label }}</router-link
                    >
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="opdConfirm in opdConfirms" :key="opdConfirm.vn">
                  <td v-for="col in columns" :key="col.key">
                    {{ opdConfirm[col.key] }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="pagination">
              <ul class="pagination flex-wrap">
                <li
                  class="page-item"
                  :class="{ disabled: paging.current <= 1 }"
                >
                  <button
                    class="page-link"
                    @click="changePage(paging.current - 1)"
                  >
                    Prev
                  </button>
                </li>
                <li
                  v-if="paging.current > 3"
                  class="page-item"
                >
                  <button class="page-link" @click="changePage(1)">1</button>
                </li>
                <li
                  v-if="paging.current > 4"
                  class="page-item disabled"
                >
                  <span class="page-link">...</span>
                </li>
                <li
                  v-for="page in pageRange"
                  :key="page"
                  class="page-item"
                  :class="{ active: page === paging.current }"
                >
                  <button class="page-link" @click="changePage(page)">
                    {{ page }}
                  </button>
                </li>
                <li
                  v-if="paging.current < paging.last - 3"
                  class="page-item disabled"
                >
                  <span class="page-link">...</span>
                </li>
                <li
                  v-if="paging.current < paging.last - 2"
                  class="page-item"
                >
                  <button
                    class="page-link"
                    @click="changePage(paging.last)"
                  >
                    {{ paging.last }}
                  </button>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: paging.current >= paging.last }"
                >
                  <button
                    class="page-link"
                    @click="changePage(paging.current + 1)"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Service from "./service";
  import Util from "../../util";
  
  export default {
    name: "OPDConfirmIndex",
    data() {
      const today = new Date().toISOString().split("T")[0];
      return {
        opdConfirms: [],
        paging: {},
        startDate: today,
        endDate: today,
        searchWord: "",
        columns: [
          { key: "vn", label: "VN", direction: "asc" },
          { key: "hn", label: "HN", direction: "asc" },
          { key: "cid", label: "CID", direction: "asc" },
          { key: "ptname", label: "Patient Name", direction: "asc" },
          { key: "vstdate", label: "Visit Date", direction: "asc" },
          { key: "department", label: "Department", direction: "asc" },
          { key: "pttype_name", label: "Type", direction: "asc" },
        ],
      };
    },
    computed: {
      pageRange() {
        const range = [];
        const start = Math.max(1, this.paging.current - 2);
        const end = Math.min(this.paging.last, this.paging.current + 2);
        for (let i = start; i <= end; i++) {
          range.push(i);
        }
        return range;
      },
    },
    methods: {
      ...Util,
      get() {
        const params = {
          startDate: this.startDate,
          endDate: this.endDate,
          searchWord: this.searchWord,
        };
        Service.get(params)
          .then((response) => {
            this.opdConfirms = response.data.opdConfirms;
            this.paging = response.data.pagination;
          })
          .catch((e) => alert(e.response.data.message));
      },
      search() {
        this.get();
      },
      clearSearch() {
        const today = new Date().toISOString().split("T")[0];
        this.startDate = today;
        this.endDate = today;
        this.searchWord = "";
        this.get();
      },
      changePage(page) {
        if (page >= 1 && page <= this.paging.last) {
          this.$router.push({ query: { ...this.$route.query, page } });
        }
      },
    },
  };
  </script>
  