<template>
  <div>
    <h1 class="page-title">
      Custom - <span class="fw-semi-bold">Components</span>
    </h1>
    <b-row>
      <b-col lg="8" xs="4">
        <Widget
          title="<h6> Random Password Generator </h6>"
          close
          collapse
          customHeader
        >
          <div role="group" class="form-row form-group" breakpoint="md">
            <label for="normal-field" class="col-form-label"
              >Type Password</label
            >
            <div class="col">
              <input
                id="generate-password"
                type="text"
                placeholder="Generator Password"
                class="form-control"
                ref="generatePassword"
              />
            </div>

            <button class="btn btn-primary" @click="getPassword()">
              Generate Pwd
            </button>
          </div>
        </Widget>
      </b-col>
      <b-col lg="4" xs="4">
        <Widget title="<h6> Watch </h6>" close collapse settings customHeader>
          <Watch />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import Watch from "@/pages/CustomComponents/Watch.vue";
export default {
  name: "CustomComponents",
  components: {
    Widget,
    Watch,
  },
  methods: {
    getPassword() {
      const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
      const passwordLength = 16;
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      this.$refs.generatePassword.value = password;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>