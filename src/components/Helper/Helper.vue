<template>
  <div :class="{ 'theme-helper': true, 'theme-helper-opened': opened }">
    <div class="theme-helper-toggler" @click="toggle">
      <div class="theme-helper-spinner bg-primary text-white">
        <i class="la la-cog"></i>
        <i class="la la-cog fs-smaller"></i>
      </div>
    </div>
    <section class="widget theme-helper-content mb-0">
      <div class="widget-body mt-3">
        <h6>Configuration</h6>
        <div class="mt-4">
          <a
            href="https://flatlogic.com/templates/sing-app-vue"
            target="_blank"
            role="button"
            class="btn btn-success btn-rounded-f btn-block fs-mini text-white"
          >
            Purchase
          </a>
          <a
            href="http://demo.flatlogic.com/sing-app-vue/#/documentation/"
            target="_blank"
            role="button"
            class="btn btn-primary btn-rounded-f btn-block fs-mini"
          >
            Documentation
          </a>
        </div>
        <div class="d-flex justify-content-between mt-lg">
          <a
            role="button"
            target="_blank"
            href="https://github.com/flatlogic/sing-app-vue-dashboard"
            class="
              btn btn-outline-default btn-rounded-f
              fs-mini
              text-muted
              btn-block
            "
          >
            <i class="fa fa-github mr-xs"></i>
            Github
          </a>
        </div>
        <div class="mt-lg d-flex flex-column align-items-center theme-sharing">
          <span class="fs-sm"> Thank you for sharing! </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Helper",
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style src="./Helper.scss" lang="scss"></style>
