<template>
  <div class="Lists-overview">
    <h1 class="page-title">
      Lists - <span class="fw-semi-bold">Sortable Groups</span>
    </h1>
    <b-row>
      <b-col xs="12" lg="12">
        <Widget
          title="<h5>Nestable <span class='fw-semi-bold'>List</span></h5>"
          close
          collapse
          customHeader
        >
          <ul id="nestList-ul">
            <li>
              <span class="caretSpan">Beverages</span>
              <ul class="nestedCustom">
                <li>Water</li>
                <li>Coffee</li>
                <li>
                  <span class="caretSpan">Tea</span>
                  <ul class="nestedCustom">
                    <li>Black Tea</li>
                    <li>White Tea</li>
                    <li>
                      <span class="caretSpan">Green Tea</span>
                      <ul class="nestedCustom">
                        <li>Sencha</li>
                        <li>Gyokuro</li>
                        <li>Matcha</li>
                        <li>Pi Lo Chun</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </Widget>
      </b-col>
      <b-col xs="12" lg="12">
        <Widget
          title="<h5>Grouped <span class='fw-semi-bold'>Lists</span></h5>"
          close
          collapse
          customHeader
        >
          <h5>Closest <span class="fw-semi-bold">Stars</span></h5>
          <p>
            Try to play around with this list. Are you ready to pass an exam on
            astronomy?
          </p>
          <div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
              style=""
            >
              <div>
                <i class="fa fa-sort mr-sm"></i><span class="mr-sm">01</span>The
                Sun
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
              style=""
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">02</span>Proxima Centauri
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
              style=""
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">03</span> Barnard's Star
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">04</span>Wolf 359
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">05</span>Lalande 21185
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Carousel",
  components: { Widget },
  data() {
    return {
      lists: [
        {
          category: "beverages",
          subCategory: ["Water", "coffee", ["asdsad"]],
        },
      ],
    };
  },
  computed: {},
  mounted() {
    var toggler = document.getElementsByClassName("caretSpan");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement
          .querySelector(".nestedCustom")
          .classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  },
};
</script>

<style lang="scss" scoped>
ul,
#nestList-ul {
  list-style-type: none;
}

#nestList-ul {
  margin: 0;
  padding: 0;
}

.caretSpan {
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

.caretSpan::before {
  content: "\25B6";
  color: black;
  display: inline-block;
  margin-right: 6px;
}

.caret-down::before {
  transform: rotate(90deg);
}

.nestedCustom {
  display: none;
}

.active {
  display: block;
  margin-left: 20px;
}
</style>
