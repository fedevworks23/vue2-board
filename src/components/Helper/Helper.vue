<template>
  <div :class="{ 'theme-helper': true, 'theme-helper-opened': opened }">
    <div class="theme-helper-toggler" @click="toggle">
      <div class="theme-helper-spinner bg-primary text-white">
        <i class="la la-cog"></i>
        <i class="la la-cog fs-smaller"></i>
      </div>
    </div>
    <section class="widget mb-0" :class="{ 'theme-helper-content': opened }">
      <div class="widget-body mt-3">
        <h6>Configuration</h6>
        <div class="mt-4">
          <a
            href="#"
            target="_blank"
            role="button"
            class="btn btn-success btn-rounded-f btn-block fs-mini text-white"
          >
            Purchase
          </a>
          <a
            href="#"
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
            href="#"
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
