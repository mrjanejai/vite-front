<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="center-container">
          <div class="d-flex justify-content-center">
            <div class="card card-width p-0">
              <div class="card-header">
                <h3>Change Password</h3>
              </div>
              <div class="card-body">
                <i class="login fa fa-user-circle"></i>
                <form method="post" @submit.prevent="changePassword()">
                  <div class="row">
                    <div class="mb-3 col-12">
                      <label class="form-label" for="user_account_password">Password</label>
                      <input id="user_account_password" name="password" class="form-control form-control-sm" v-model="user.password" type="password" required maxlength="100" />
                    </div>
                    <div class="mb-3 col-12">
                      <label class="form-label" for="user_account_password2">Confirm password</label>
                      <input data-match="user_account_password" id="user_account_password2" name="password2" class="form-control form-control-sm" type="password" required maxlength="100" />
                    </div>
                    <div class="col-12">
                      <button class="btn btn-sm btn-secondary w-100">Change Password</button>
                    </div>
                  </div>
                </form>
                <span v-if="result.success" class="text-success">Change password done</span>
                <span v-if="result.error" class="text-danger">Token not found!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import http from '../../http'
  import Util from"../../util"
  
  export default {
    name: 'ChangePassword',
    data() {
      return {
        user: {},
        result: {}
      }
    },
    mounted() {
      http.get('/changePassword/' + this.$route.params.token, this.user).catch((e) => {
        alert('Token not found!')
        this.$router.push('/login')
      })
    },
    methods: {
      ...Util,
      changePassword(e) {
        if (!this.validateForm()) {
          return
        }
        http.post('/changePassword/' + this.$route.params.token, this.user).then(response => {
          this.result = { success: true }
        }).catch((e) => {
          this.result = { error: true }
        })
      }
    }
  }
</script>