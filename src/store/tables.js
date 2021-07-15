import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
    apiMessage: "",
  },
  mutations: {
    GET_USERS(state, payload) {
      state.users = payload;
    },
    DELETE_USERS(state, payload) {
      state.apiMessage = payload;
    },
    ERROR(state, data) {
      console.log(data.message);
      console.log(data.statusCode);
      console.log(JSON.stringify(data));
    },
  },
  actions: {
    async getUsersFromApi({ commit }) {
      const { data } = await axios.get("http://localhost:5000/users");
      if (data.status === 200) {
        commit("GET_USERS", data.data);
      }
    },
    async deleteUserFromApi({ commit, dispatch }, userID) {
      const { data } = await axios.delete(
        `http://localhost:5000/users/${userID}`
      );
      commit("DELETE_USERS", data.message);
      dispatch("getUsersFromApi");
    },
    async saveUserToAPI({ commit, dispatch }, userData) {
      try {
        const { data } = await axios.post(
          `http://localhost:5000/users`,
          userData
        );
        console.log(data);
        dispatch("getUsersFromApi");
      } catch (error) {
        commit("ERROR", error);
      }
    },
  },
};
