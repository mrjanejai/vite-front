<template>
  <div v-if="isReady">
    <div v-if="user">
      <div class="wrapper">
        <input id="sidebar_toggle" type="checkbox" />
        <nav id="sidebar">
          <router-link to="/home" class="bg-light border-bottom">
            <h4>SDPY-MIS</h4>
          </router-link>
          <ul class="list-unstyled">
            <li>
              <router-link to="/home"
                :class="this.$route.path.endsWith('/home') ? 'active bg-primary' : ''">Home</router-link>
            </li>
            <li v-for="menu in user.menu" :key="menu.path">
              <router-link :to="`/${menu.path}`"
                :class="this.$route.path.substr(1).split('/')[0] == menu.path ? 'active bg-primary' : ''">{{menu.title}}</router-link>
              <!-- <ul v-if="menu.subMenu && menu.subMenu.length" class="list-unstyled pl-3">
                <li v-for="sub in menu.subMenu" :key="sub.subpath">
                  <router-link :to="`/${sub.subpath}`"
                    :class="this.$route.path == `/${sub.subpath}` ? 'active bg-primary' : ''">{{sub.subtitle}}</router-link>
                </li>
              </ul> -->
            </li>
          </ul>
        </nav>
        <div id="body">
          <nav class="navbar bg-light border-bottom">
            <div class="container-fluid">
              <label for="sidebar_toggle" class="btn btn-primary btn-sm"><i class="fa fa-bars"></i></label>
              <ul class="navbar-nav ms-auto">
                <li id="searchbar_toggle_menu" class="d-none">
                  <a class="nav-link text-secondary" href="#"><label for="searchbar_toggle" class="d-lg-none"><i
                        class="fa fa-search"></i></label></a>
                </li>
                <li class="dropdown">
                  <a class="nav-link text-secondary dropdown-toggle" data-bs-toggle="dropdown" href="#"><i
                      class="fa fa-user"></i> <span class="d-none d-lg-inline">{{user.name}}</span></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link v-if="!user.phosxp" to="/profile" class="dropdown-item"><i class="fa fa-user"></i>
                      Profile</router-link>
                    <router-link to="/logout" class="dropdown-item"><i class="fa fa-sign-out"></i> Logout</router-link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div class="content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import http from './http'
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const isReady = ref(false);
    const user = ref(null);

    onMounted(async () => {
      try {
        const response = await http.get('/user');
        user.value = response.data;

        // ตรวจสอบและกำหนดค่า phosxp จาก localStorage
        const storedPhosxp = localStorage.getItem('phosxp');
        user.value.phosxp = storedPhosxp === 'true';

        isReady.value = true;
      } catch (error) {
        isReady.value = true;
      }
    });

    return { isReady, user };
  },
  methods: {
    handleLogin(response) {
      // เก็บ token และ phosxp ใน localStorage
      localStorage.setItem('phosxp', response.data.user.phosxp);
      // อาจจะมีการเก็บ token ด้วยถ้าจำเป็น
      localStorage.setItem('token', response.data.token);
    }
  }
}
</script>
