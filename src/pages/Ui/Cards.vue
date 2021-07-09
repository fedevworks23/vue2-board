<template>
  <div class="cards-overview">
    <h1 class="page-title">
      Cards - <span class="fw-semi-bold">Examples</span>
    </h1>
    <p>
      A card is a flexible and extensible content container. It includes options
      for headers and footers, a wide variety of content, contextual background
      colors, and powerful display options. If you’re familiar with Bootstrap 3,
      cards replace its old panels, wells, and thumbnails. Similar functionality
      to those components is available as modifier classes for cards.
    </p>
    <b-row>
      <b-col xs="12" lg="12"
        ><div
          class="card border-0 mb-xlg background-cover text-white"
          :style="{
            'background-image':
              'url(' + require('@/assets/imgs/card-header.jpg') + ')',
          }"
        >
          <!----><!---->
          <div class="card-body">
            <!----><!----><span>13 Mar</span>
            <h3 class="mt-lg">Lifestyle brand</h3>
            <p class="w-75">
              A lifestyle brand is a company that markets its products or
              services to embody the interests, attitudes, and opinions of a
              group or a culture. Lifestyle brands seek to inspire, guide, and
              motivate people, with the goal of their products contributing to
              the definition of the consumer's way of life.
            </p>
            <button type="button" class="btn btn-rounded-f mt-lg btn-danger">
              Full Article
            </button>
          </div>
          <!----><!---->
        </div>
      </b-col>
      <b-col xs="12" lg="4">
        <div class="card border-0 mb-xlg">
          <img
            src="@/assets/imgs/isometric-design.jpg"
            alt="Image"
            class="card-img-top"
          /><!---->
          <div class="card-body">
            <h4 class="card-title">Isometric design</h4>
            <!---->
            <p class="card-text">
              Isometric projection is a method for visually representing
              three-dimensional in two dimensions in technical and engineering
              drawings.
            </p>
            <div class="w-100 text-center">
              <button type="button" class="btn btn-rounded-f btn-primary">
                Full Article
              </button>
            </div>
          </div>
          <!----><!---->
        </div>
      </b-col>
      <b-col xs="12" lg="4">
        <div class="card mb-xlg border-0">
          <!----><!---->
          <div class="card-body">
            <!----><!----><a href="#" class="fw-semi-bold text-success"
              >Avg Rating</a
            ><a href="#" class="fw-semi-bold text-muted ml-sm">All Time</a>
            <hr />
            <div class="d-flex justify-content-between mb-lg">
              <div class="text-warning">
                <i class="fa fa-star mr-xs"></i><i class="fa fa-star mr-xs"></i
                ><i class="fa fa-star mr-xs"></i><i class="fa fa-star mr-xs"></i
                ><i class="fa fa-star"></i>
              </div>
              <span class="text-muted"><small>342 REVIEWS</small></span>
            </div>
            <div class="mb-lg">
              <h3 class="text-success mb-0">69%</h3>
              of customers recomend this product
            </div>
            <button type="button" class="btn btn-rounded-f btn-success">
              Write a Review
            </button>
          </div>
          <!----><!---->
        </div>
        <div class="card mb-xlg border-0" style="position: relative">
          <img
            src="@/assets/imgs/weekly-inspiration.jpeg"
            class="card-img"
          /><!---->
          <div class="card-body">
            <h4 class="card-title">Weekly Inspiration</h4>
            <!----><span
              class="badge mt-lg fw-thin rounded-0 badge-success"
              style="position: absolute; top: 0px; left: 0px"
              >New</span
            >
            <hr />
            <p>
              There are at least 109 mountains on Earts with elevations greeter
              than 7,200 meters
            </p>
            <button type="button" class="btn border-0 btn-default">
              Read More
            </button>
          </div>
          <!----><!---->
        </div>
      </b-col>
      <b-col xs="12" lg="4">
        <div class="card border-0">
          <img src="@/assets/imgs/native-starter.png" class="card-img" /><!---->
          <div class="card-body">
            <!----><!----><small>Technology</small><br />
            <h4 class="mb mt-xs">React Native Starter</h4>
            <hr />
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <span class="text-muted fw-semi-bold">from $49.95</span
              ><button type="button" class="btn btn-info">Read more</button>
            </div>
          </div>
          <!----><!---->
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import Widget from "@/components/Widget/Widget";

export default {
  name: "Cards",
  // components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
