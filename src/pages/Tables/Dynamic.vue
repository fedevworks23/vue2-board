<template>
  <div class="dynamic-overview">
    <h2 class="page-title">
      Tables - <span class="fw-semi-bold">Dynamic</span>
    </h2>
    <div>
      <b-row>
        <b-col lg="12" xs="12">
          <Widget
            title="<h4>The <span class='fw-semi-bold'>Dynamic Fields</span></h4>"
            close
            collapse
            customHeader
          >
            <form class="">
              <legend><strong>Horizontal</strong> form</legend>
              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
              >
                <label for="normal-field" class="col-2 col-form-label">
                  Username:
                </label>
                <div class="col">
                  <input
                    id="normal-field"
                    type="text"
                    placeholder="Enter Username"
                    class="form-control"
                    ref="userName"
                  />
                </div>
              </div>
              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
              >
                <label for="normal-field" class="col-2 col-form-label">
                  Email:
                </label>
                <div class="col">
                  <input
                    id="normal-field"
                    type="email"
                    placeholder="Enter Email"
                    class="form-control"
                    ref="email"
                  />
                </div>
              </div>
              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
              >
                <label for="normal-field" class="col-2 col-form-label">
                  Test Message
                </label>
                <div class="col">
                  <input
                    id="normal-field"
                    type="testMessage"
                    placeholder="Enter Message"
                    class="form-control"
                    ref="testMessage"
                  />
                </div>
              </div>

              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
              >
                <label for="normal-field" class="col-2 col-form-label">
                  Profile Picture
                </label>
                <div class="col">
                  <b-form-file
                    v-model="imageFile"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                  <div class="mt-3">
                    <button
                      :class="[
                        'btn',
                        !profilePicUpload ? 'btn-primary' : 'btn-secondary',
                      ]"
                      @click="upload"
                    >
                      Upload
                    </button>
                    <button
                      :class="[
                        'btn',
                        'ml-1',
                        profilePicUpload ? 'btn-primary' : 'btn-secondary',
                      ]"
                      @click="(imageFile = []), (profilePicUpload = false)"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
              >
                <b-button
                  type="submit"
                  size="sm"
                  class="auth-btn mb-3 col-12"
                  variant="inverse"
                  @click="saveData"
                  >Save Data</b-button
                >
              </div>
            </form>
          </Widget>
        </b-col>
        <b-col xs="12" lg="12">
          <Widget
            title="<h4>The <span class='fw-semi-bold'>Dynamic</span></h4>"
            close
            collapse
            customHeader
          >
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Profile</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <img
                        :src="user.dataObj.profilePicInfo.image"
                        alt=""
                        width="25"
                        height="25"
                        style="border-radius: 50%"
                      />
                    </td>
                    <td>{{ user.userName }}</td>
                    <td>
                      <a href="#">{{ user.email }}</a>
                    </td>
                    <td>
                      <b-badge
                        @click="deleteUserFromApi(user._id)"
                        variant="primary"
                        pill
                        style="cursor: pointer"
                      >
                        Delete
                      </b-badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { mapActions, mapState } from "vuex";

export default {
  name: "Dynamic",
  components: { Widget },
  data() {
    return {
      fileSource: "",
      imageFile: null,
      file2: null,
      profilePicUpload: false,
    };
  },
  created() {
    this.getUsersFromApi();
  },
  computed: {
    ...mapState("tablesData", ["users"]),
  },
  methods: {
    ...mapActions("tablesData", [
      "getUsersFromApi",
      "deleteUserFromApi",
      "saveUserToAPI",
    ]),
    saveData() {
      const userData = {
        userName: this.$refs.userName.value,
        email: this.$refs.email.value,
        dataObj: {
          test: this.$refs.testMessage.value,
          profilePicInfo: this.fileSource,
        },
      };
      this.saveUserToAPI(userData);
    },

    upload() {
      const reader = new FileReader();
      if (this.imageFile) {
        reader.readAsDataURL(this.imageFile);
        reader.addEventListener(
          "load",
          () => {
            this.fileSource = {
              image: reader.result,
              time: this.imageFile.lastModified,
              size: this.imageFile.size,
              type: this.imageFile.type,
              lastModified: this.imageFile.lastModified,
            };
            this.profilePicUpload = true;
          },
          false
        );
      }
    },
  },
};
</script>
