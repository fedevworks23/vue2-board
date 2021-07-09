<template>
  <div class="carousel-overview">
    <h1 class="page-title">
      Carousel - <span class="fw-semi-bold">Examples</span>
    </h1>
    <p>
      The carousel is a slideshow for cycling through a series of content, built
      with CSS 3D transforms and a bit of JavaScript. It works with a series of
      images, text, or custom markup. It also includes support for previous/next
      controls and indicators.
    </p>
    <b-row>
      <b-col xs="12" lg="12">
        <div
          role="region"
          id="carousel1"
          aria-busy="false"
          class="carousel slide"
        >
          <div id="carousel1___BV_inner_" role="list" class="carousel-inner">
            <div
              role="listitem"
              class="carousel-item"
              aria-current="false"
              aria-posinset="1"
              aria-setsize="3"
              id="__BVID__358"
              aria-hidden="true"
            >
              <img
                src="@/assets/imgs/slide-1.jpg"
                class="img-fluid w-100 d-block"
              /><!---->
            </div>
            <div
              role="listitem"
              class="carousel-item"
              aria-current="false"
              aria-posinset="2"
              aria-setsize="3"
              id="__BVID__359"
              aria-hidden="true"
            >
              <img
                src="@/assets/imgs/slide-2.jpg"
                class="img-fluid w-100 d-block"
              /><!---->
            </div>
            <div
              role="listitem"
              class="carousel-item active"
              aria-current="true"
              aria-posinset="3"
              aria-setsize="3"
              id="__BVID__360"
              aria-hidden="false"
            >
              <img
                src="@/assets/imgs/slide-3.jpg"
                class="img-fluid w-100 d-block"
              /><!---->
            </div>
          </div>
          <a
            role="button"
            aria-controls="carousel1___BV_inner_"
            class="carousel-control-prev"
            ><span aria-hidden="true" class="carousel-control-prev-icon"></span
            ><span class="sr-only">Previous slide</span></a
          ><a
            role="button"
            aria-controls="carousel1___BV_inner_"
            class="carousel-control-next"
            ><span aria-hidden="true" class="carousel-control-next-icon"></span
            ><span class="sr-only">Next slide</span></a
          >
          <ol
            id="carousel1___BV_indicators_"
            aria-hidden="false"
            aria-label="Select a slide to display"
            aria-owns="carousel1___BV_inner_"
            class="carousel-indicators"
          >
            <li
              role="button"
              id="carousel1___BV_indicator_1_"
              tabindex="0"
              aria-current="false"
              aria-label="Goto slide 1"
              aria-controls="carousel1___BV_inner_"
              class=""
              aria-describedby="__BVID__358"
            ></li>
            <li
              role="button"
              id="carousel1___BV_indicator_2_"
              tabindex="0"
              aria-current="false"
              aria-label="Goto slide 2"
              aria-controls="carousel1___BV_inner_"
              class=""
              aria-describedby="__BVID__359"
            ></li>
            <li
              role="button"
              id="carousel1___BV_indicator_3_"
              tabindex="0"
              aria-current="true"
              aria-label="Goto slide 3"
              aria-controls="carousel1___BV_inner_"
              class="active"
              aria-describedby="__BVID__360"
            ></li>
          </ol>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "Carousel",
  data() {
    return {};
  },
  computed: {},
};
</script>
