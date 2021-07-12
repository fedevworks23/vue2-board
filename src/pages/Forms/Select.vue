<template>
  <div class="select-overview">
    <h1 class="page-title">Select</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="12">
          <Widget title="<h5>Select</h5>" close collapse customHeader>
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
              <div class="mt-3">Sized sm</div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "First option", text: "This is First option" },
        { value: "Second Option", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>