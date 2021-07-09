<template>
  <div class="jumbotron-overview">
    <h1 class="page-title">
      Jumbotron - <span class="fw-semi-bold">Examples</span>
    </h1>
    <div class="jumbotron">
      <h1 class="display-3">Fluid jumbotron</h1>
      <p class="lead">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </div>
    <b-row>
      <b-col xs="12" lg="8">
        <div class="jumbotron">
          <h1 class="display-3">Hello, world!</h1>
          <p class="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-2" />
          <p>
            It uses utility classes for typgraphy and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <button type="button" class="btn btn-primary">Learn More</button>
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {};
  },
  computed: {},
};
</script>
