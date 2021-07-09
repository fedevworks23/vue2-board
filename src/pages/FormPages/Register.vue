<template>
  <div class="register-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        Vue Register
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Login to your Web App</h3>"
        customHeader
      >
        <p class="widget-auth-info">Use your email to sign up.</p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{ errorMessage }}
          </b-alert>
          <div class="form-group">
            <input
              class="form-control no-border"
              ref="username"
              required
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              ref="email"
              required
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              ref="password"
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <b-button
            type="submit"
            size="sm"
            class="auth-btn mb-3"
            variant="inverse"
            >Register</b-button
          >
        </form>
        <p class="widget-auth-info">Already registered? Sign In!</p>
        <router-link class="d-block text-center" to="/app/form-pages/login">
          Login to account
        </router-link>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2019 &copy; Sing App Vue Admin Dashboard Template - Made by
      <a href="https://flatlogic.com/">Flatlogic</a>
    </footer>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "RegisterPage",
  components: { Widget },
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    login() {
      const username = this.$refs.username.value;
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (username.length !== 0 && email.length !== 0 && password.length !== 0) {
        window.localStorage.setItem("authenticated", true);
        this.$router.push("/app/dashboard");
      }
    },
  },
  created() {
    if (window.localStorage.getItem("authenticated") === "true") {
      this.$router.push("/app/main/analytics");
    }
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
