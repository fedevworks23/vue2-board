<template>
  <Widget
    title="<h6> Random Password Generator </h6>"
    close
    collapse
    customHeader
  >
    <div role="group" class="form-row form-group" breakpoint="md">
      <div class="col">
        <input
          id="generate-password"
          type="text"
          placeholder="Generator Password"
          class="form-control"
          ref="generatePassword"
        />
      </div>
      <button class="btn btn-primary" @click="onCopy()">Generate Pwd</button>
    </div>
  </Widget>
</template>

<script>
export default {
  name: "PasswordGenerator",

  methods: {
    onCopy() {
      const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
      const passwordLength = 16;
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      this.$refs.generatePassword.value = password;
      const el = document.createElement("textarea");
      el.value = password;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      // console.log(`coppied ${password}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>