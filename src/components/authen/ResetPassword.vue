<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="center-container">
          <div class="d-flex justify-content-center">
            <div class="card card-width p-0">
              <div class="card-header">
                <h3>Reset Password</h3>
              </div>
              <div class="card-body">
                <i class="login fa fa-user-circle"></i>
                <form method="post" @submit.prevent="resetPassword()">
                  <div class="row">
                    <div class="mb-3 col-12">
                      <label class="form-label" for="user_account_email">Email</label>
                      <input id="user_account_email" name="email" class="form-control form-control-sm" v-model="user.email" type="email" required maxlength="50" />
                    </div>
                    <div class="col-12">
                      <button class="btn btn-sm btn-secondary w-100">Reset Password</button>
                    </div>
                  </div>
                </form>
                <span v-if="result.success" class="text-success">A reset password link has been sent to your email</span>
                <span v-if="result.error" class="text-danger">Email not found!</span>
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
  
  export default {
    name: 'ResetPassword',
    data() {
      return {
        user: {},
        result: {}
      }
    },
    methods: {
      resetPassword() {
        http.post('/resetPassword', this.user).then(response => {
          this.result = { success: true }
        }).catch((e) => {
          this.result = { error: true }
        })
      }
    }
  }
</script>